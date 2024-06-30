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
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const UserPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
    },
  });

  if (!session?.user?.name) {
    const onSubmit = async (data: z.infer<typeof nameSchema>) => {
      const { name } = data;
      const email = session?.user?.email;
      if (!name) {
        setError("Name is required");
        return;
      }
      try {
        const res = await fetch("/api/auth/update-name", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
        const result = await res.json();
        console.log("User name updated successfully", result);

        // Rafraîchir la session après la mise à jour du nom
        await signIn("credentials", { email, redirect: false });

        // Rediriger l'utilisateur après la mise à jour réussie
        router.push("/your-redirect-path"); // Remplacez "/your-redirect-path" par le chemin réel où vous voulez rediriger l'utilisateur
      } catch (error: unknown) {
        console.error("update-name", error);
        if (error instanceof Error) {
          form.setError("name", { type: "manual", message: error.message });
        } else {
          form.setError("name", {
            type: "manual",
            message: "Signup failed",
          });
        }
      }
    };

    return (
      <Section>
        <h2 className="text-2xl font-bold mb-10">Welcome!</h2>
        <FormProvider {...form}>
          <form
            action=""
            className="bg-accent border shadow rounded-md p-4 flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
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
