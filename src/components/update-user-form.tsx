'use client';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { nameSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const UpdateUserForm = () => {
  const { data: session, update } = useSession();
  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof nameSchema>) => {
    const { name } = data;
    const email = session?.user?.email;

    try {
      const res = await fetch('/api/auth/update-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      await update({
        ...session,
        user: {
          ...session?.user,
          name: name,
        },
      });
      router.refresh();
    } catch (error) {
      console.error('Failed to update name:', error);
      if (error instanceof Error) {
        form.setError('name', { type: 'manual', message: error.message });
      } else {
        form.setError('name', { type: 'manual', message: 'Update failed' });
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Your name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.errors.name && (
          <p className="text-red-500">{form.formState.errors.name.message}</p>
        )}
        <Button type="submit">Valider</Button>
      </form>
    </FormProvider>
  );
};

export default UpdateUserForm;
