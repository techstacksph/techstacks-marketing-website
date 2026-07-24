'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SubmitButton } from '@/components/submit-button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const ledInquiryFormSchema = z
  .object({
    name: z.string().min(1, 'Please enter your full name.'),
    contactNumber: z.string().min(1, 'Please enter your contact number.'),
    address: z.string().min(1, 'Please enter your address.'),
    email: z.string().email('Please enter a valid email address.'),
    ledType: z.enum(['Indoor', 'Outdoor', 'Poster Type']),
    installation: z.enum(['Yes', 'No']),
    installationType: z.string().optional(),
    notes: z.string().optional(),
  })
  .superRefine(({ installation, installationType }, ctx) => {
    if (installation === 'Yes' && !installationType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['installationType'],
        message: 'Please select installation type.',
      });
    }
  });

type LedInquiryFormData = z.infer<typeof ledInquiryFormSchema>;

export function LedInquiryForm() {
  const { toast } = useToast();

  const form = useForm<LedInquiryFormData>({
    resolver: zodResolver(ledInquiryFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      contactNumber: '',
      address: '',
      email: '',
      ledType: 'Indoor',
      installation: 'No',
      installationType: '',
      notes: '',
    },
  });

  const installationYes = form.watch('installation') === 'Yes';

  const installationOptions = useMemo(
    () => [
      { value: 'Wall mounted', label: 'Wall mounted' },
      { value: 'Steel column', label: 'Steel column' },
    ],
    [],
  );

  const onSubmit = (_data: LedInquiryFormData) => {
    toast({
      title: 'Inquiry sent',
      description:
        'We have received your LED inquiry and will contact you soon.',
    });
    form.reset({
      name: '',
      contactNumber: '',
      address: '',
      email: '',
      ledType: 'Indoor',
      installation: 'No',
      installationType: '',
      notes: '',
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <div className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-primary-static">
                LED Inquiry
              </p>
              <h2 className="text-2xl font-semibold">
                Request a quote and installation details
              </h2>
              <p className="text-sm text-muted-foreground">
                Tell us your event requirements and we&apos;ll prepare the best
                LED solution for you.
              </p>
            </div>
          </CardHeader>

          <CardContent className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ledType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LED Type</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indoor">Indoor</SelectItem>
                        <SelectItem value="Outdoor">Outdoor</SelectItem>
                        <SelectItem value="Poster Type">Poster Type</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="installation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>With Installation</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {installationYes ? (
              <FormField
                control={form.control}
                name="installationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Installation Option</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        {installationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <div className="flex justify-center pb-4">
            <SubmitButton className="w-full max-w-sm" variant="secondary">
              Submit Inquiry
            </SubmitButton>
          </div>
        </form>
      </Form>
    </Card>
  );
}
