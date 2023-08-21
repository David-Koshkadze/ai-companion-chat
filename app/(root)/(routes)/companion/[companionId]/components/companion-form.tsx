"use client";
import { Category, Companion } from "@prisma/client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import ImageUpload from "@/components/image-upload";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),

  description: z.string().min(1, {
    message: "Description is required",
  }),

  instructions: z.string().min(200, {
    message: "At least 200 characters",
  }),

  seed: z.string().min(200, {
    message: "At least 200 characters",
  }),

  src: z.string().min(1, {
    message: "Image is required",
  }),

  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
});

export default function CompanionForm(props: CompanionFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="space-y-2 w-full col-span-2">
            <div>
              <h3 className="text-lg font-medium">General Information</h3>
              <p className="text-sm text-muted-foreground">
                General information about your Companion
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-center items-center space-y-4">
                <FormControl>
                  <ImageUpload
                    onChange={field.onChange}
                    value={field.value}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Nikola Tesla"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Scientist"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>

                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a category"
                      />
                    </SelectTrigger>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
