"use client";
import ComingSoon from "@/components/layout/coming-soon.";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { nameSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
const UserPage = () => {
  const { data: session } = useSession();
  const [error, setError] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
    },
  });

  if (!session?.user?.name) {
    const onSubmit = async (data: z.infer<typeof nameSchema>) => {
      const { name } = data;
      if (!name) {
        setError("Name is required");
        return;
      }
    };
    return (
      <Section>
        <h2 className="text-2xl font-bold mb-10">Welcome!</h2>
        <FormProvider {...form}>
          <form
            action=""
            className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4"
          >
            <p>Whats your name?</p>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Your name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your name"
                      type="text"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Valider</Button>
          </form>
        </FormProvider>
      </Section>
    );
  }
  return (
    <Section>
      <ComingSoon message="User page is under construction. Stay tuned for updates!" />
    </Section>
  );
};

export default UserPage;
