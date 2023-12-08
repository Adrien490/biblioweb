"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = (data: any) => {
    // Ici, vous pouvez gérer l'envoi des données du formulaire
    console.log(data);
    toast.success("Message envoyé avec succès !");
  };

  return (
    <div className="flex flex-col gap-8 justify-center text-center p-2">
      <h1 className="text-xl text-center">Formulaire de Contact</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-center space-y-4 px-2"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <Input {...field} placeholder="Votre nom" />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="Votre email" type="email" />
              </FormItem>
            )}
          />

          <FormField
            name="subject"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sujet</FormLabel>
                <Input {...field} placeholder="Sujet de votre message" />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <textarea {...field} placeholder="Votre message" className="py-2 rounded-md bg-muted w-full" />
              </FormItem>
            )}
          />

          <Button type="submit" className="rounded-xl">
            Envoyer Message
          </Button>
        </form>
      </Form>
    </div>
  );
};
