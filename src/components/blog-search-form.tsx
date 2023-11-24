'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Form, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';
import { Label } from './ui/label';

const blogSearchSchema = z.object({
  q: z.string(),
});

export function BlogSearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof blogSearchSchema>>({
    resolver: zodResolver(blogSearchSchema),
    defaultValues: {
      q: searchParams.get('q') || '',
    },
  });

  function handleSubmit(params: z.infer<typeof blogSearchSchema>) {
    const newParams = new URLSearchParams(params);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem>
              <Label className="flex items-center w-full max-w-md gap-3 px-3 font-normal border rounded-md bg-background border-input">
                <Search className="shrink-0" />
                <Input
                  placeholder="Search for blogs, topics, or keywords..."
                  type="search"
                  variant="base"
                  {...field}
                />
              </Label>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
