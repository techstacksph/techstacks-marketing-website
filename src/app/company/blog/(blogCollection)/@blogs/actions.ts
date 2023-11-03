'use server';

/* eslint-disable @typescript-eslint/require-await -- Server actions needs to be async */

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { NavRoutes } from '@/constants/nav-routes';
import { parseUnknownObject } from '@/utils/parse-unknown-object';
import { BlogSearchFormNames as FormNames } from '@/lib/blog/forms';

export async function searchBlogs(formData: FormData) {
  const pageQuery = parseUnknownObject(
    formData.entries(),
    z.object({
      [FormNames.Query]: z.string(),
    }),
  );

  const searchParams = new URLSearchParams(pageQuery);

  revalidatePath(NavRoutes.Company.Blog);
  redirect(`${NavRoutes.Company.Blog}?${searchParams.toString()}`);
}
