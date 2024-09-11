"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onBoardingSchema } from "@/types/schema";
type Props = {};
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";
import BackButton from "@/app/BackButton";
import { Progress } from "../ui/progress";
import { Footer } from "@/app/page";

const MainForm = (props: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof onBoardingSchema>>({
    resolver: zodResolver(onBoardingSchema),
  });
  function onSubmit(data: z.infer<typeof onBoardingSchema>) {
    router.push("/?step=vehicle");
  }
  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState]);
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between max-w-screen-md mx-auto  lg:items-start lg:pt-40 lg:gap-40">
      <div className="">
        <Button
          className="flex gap-2 justify-start h-14 w-[190px] text-xl text-yellow-200 mt-4 uppercase"
          style={{ borderRadius: "50px" }}
        >
          <Zap />
          <h1> Profile Info </h1>
        </Button>

        <h2 className="font-bold text-3xl my-4">Welcome! Let's get started.</h2>
        <p className="hidden lg:block">
          We'll use this information to provide you vehicle health services.
        </p>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-4 justify-center lg:min-h-max    min-h-[60vh] w-full bg-white p-4 rounded-md"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="p-0">
                  <FormLabel className="p-0  text-slate-500 uppercase font-semibold text-xs">
                    Name
                  </FormLabel>
                  <FormControl className="p-0">
                    <Input
                      className="border-b-[2px] border-t-0 border-x-0 rounded-none "
                      placeholder="Percy Cox"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="p-0  text-slate-500 uppercase font-semibold text-xs">
                    ZIP Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-b-[2px] border-t-0 border-x-0 rounded-none"
                      placeholder="0 0 0 0"
                      {...field}
                    />
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
                  <FormLabel className="p-0  text-slate-500 uppercase font-semibold text-xs">
                    Contact Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-b-[2px] border-t-0 border-x-0 rounded-none"
                      placeholder="placeholder@gmail.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="p-0  text-slate-500 uppercase font-semibold text-xs">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="border-b-[2px] border-t-0 border-x-0 rounded-none"
                      placeholder="(123) 4567890"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptance"
              render={({ field }) => (
                <FormItem className="w-full space-x-2 flex items-center mt-4">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="text-xs font-semibold">
                    Receive SMS updates about health check
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="flex justify-self-end  rounded-full lg:hidden"
          >
            Continue
          </Button>
          <Footer>
            <Button
              type="submit"
              className="flex justify-self-center rounded-full "
            >
              Continue
            </Button>
          </Footer>
        </form>
      </Form>
    </div>
  );
};

export default MainForm;
