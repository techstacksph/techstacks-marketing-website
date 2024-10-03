'use client';

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { actionHandler } from '@/utils/action-handler';
import { SubmitButton } from '@/components/submit-button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  type ContactFormData,
  REFERRALS,
  contactFormSchema,
  SUBJECTS,
} from './form';
import { contactAction } from './actions';

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    values: {
      name: '',
      email: '',
      subject: 'Inquire service',
      subjectExtension: '',
      referral: REFERRALS.at(0)?.name,
      message: '',
    },
  });

  const isOthers = form.watch('subject') === 'Others';
  const isIntern = form.watch('subject') === 'Internship application';

  function handleDoAfter() {
    toast({ title: 'Sent successfully' });
    form.reset();
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
      title: 'Unknown error occurred!',
      description: JSON.stringify(err),
      variant: 'destructive',
    });
  }

  return (
    <Card>
      <Form {...form}>
        <form
          action={actionHandler(form, contactAction, {
            doAfter: handleDoAfter,
            onError: handleOnError,
          })}
        >
          <CardHeader>
            <CardDescription className="text-center">
              We&apos;re eager to hear from you! Fill out the form below, and
              we&apos;ll reach out to you at our earliest convenience.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {SUBJECTS.map(({ name, key }) => (
                          <SelectItem key={key} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isOthers || isIntern ? (
                <FormField
                  control={form.control}
                  name="subjectExtension"
                  render={({ field }) => (
                    <FormItem>
                      {isOthers ? <FormLabel>Please specify</FormLabel> : null}
                      {isIntern ? <FormLabel>School</FormLabel> : null}
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : null}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referral"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What led you to discover us?</FormLabel>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {REFERRALS.map(({ Icon, name, key }) => (
                          <SelectItem key={key} value={name}>
                            {Icon ? <Icon className="inline mr-6" /> : null}
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>

          <CardFooter className="justify-center">
            <SubmitButton variant="secondary">Submit</SubmitButton>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
