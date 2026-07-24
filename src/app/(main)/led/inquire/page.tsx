'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { H2, H3, Subheading } from '@/components/ui/typography';
import { Section } from '@/components/default-elements';
import { BreadCrumbItem, BreadCrumbs } from '@/components/bread-crumbs';
import { SubmitButton } from '@/components/submit-button';
import { useToast } from '@/components/ui/use-toast';
import { actionHandler } from '@/utils/action-handler';
import { ledInquiryAction } from './actions';
import { ledInquiryFormSchema, type LedInquiryFormType } from './form';

export default function LedInquiryPage() {
  const { toast } = useToast();

  const form = useForm<LedInquiryFormType>({
    resolver: zodResolver(ledInquiryFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      contactNumber: '',
      address: '',
      email: '',
      scenario: 'Events',
      ledType: 'Indoor',
      installation: 'No',
      installationType: '',
      notes: '',
    },
  });

  const installationYes = form.watch('installation') === 'Yes';

  function handleDoAfter() {
    toast({
      title: 'Inquiry sent',
      description: 'Your LED inquiry has been submitted successfully.',
    });
    form.reset({
      name: '',
      contactNumber: '',
      address: '',
      email: '',
      scenario: 'Events',
      ledType: 'Indoor',
      installation: 'No',
      installationType: '',
      notes: '',
    });
  }

  function handleOnError(err: unknown) {
    if (err instanceof Error) {
      return toast({
        title: err.name,
        description: err.message,
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Unknown error occurred',
      description: JSON.stringify(err),
      variant: 'destructive',
    });
  }

  return (
    <Section className="space-y-8 py-16">
      <BreadCrumbs className="self-start">
        <Link href="/led">
          <BreadCrumbItem className="dark:text-white">
            LED Display
          </BreadCrumbItem>
        </Link>
        <BreadCrumbItem>Inquiry</BreadCrumbItem>
      </BreadCrumbs>

      <div className="flex flex-col items-center gap-8">
        <div className="max-w-2xl text-center">
          <H2>LED Inquiry Form</H2>
          <Subheading>
            Tell us your event requirements and we&apos;ll prepare a proposal
            with pricing, installation options, and delivery details.
          </Subheading>
        </div>

        <Card className="w-full max-w-4xl">
          <Form {...form}>
            <form
              action={actionHandler(form, ledInquiryAction, {
                doAfter: handleDoAfter,
                onError: handleOnError,
              })}
              className="space-y-6 p-6"
            >
              <CardHeader>
                <div className="space-y-2">
                  <H3>Request a quote now</H3>
                  <p className="text-sm text-muted-foreground">
                    Complete the form below and our LED specialists will contact
                    you with the best solution.
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
                  name="scenario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scenario</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Events">Events</SelectItem>
                            <SelectItem value="Churches">Churches</SelectItem>
                            <SelectItem value="Store Ad">Store Ad</SelectItem>
                            <SelectItem value="Conference Room">
                              Conference Room
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
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
                            <SelectItem value="Poster Type">
                              Poster Type
                            </SelectItem>
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
                        <div className="flex flex-wrap gap-3">
                          {['Yes', 'No'].map((option) => (
                            <label
                              className="inline-flex items-center gap-2 rounded-full border border-input px-4 py-2 text-sm"
                              key={option}
                            >
                              <input
                                checked={field.value === option}
                                className="h-4 w-4 accent-primary-static"
                                onChange={(event) => {
                                  field.onChange(event.target.value);
                                }}
                                type="radio"
                                value={option}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
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
                            <SelectContent>
                              <SelectItem value="Wall mounted">
                                Wall mounted
                              </SelectItem>
                              <SelectItem value="Steel column">
                                Steel column
                              </SelectItem>
                              <SelectItem value="Steel column">
                                Hoisting
                              </SelectItem>
                              <SelectItem value="Steel column">
                                Others
                              </SelectItem>
                            </SelectContent>
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
                        <Textarea className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <div className="flex justify-center pb-4">
                <SubmitButton variant="secondary">Submit Inquiry</SubmitButton>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </Section>
  );
}
