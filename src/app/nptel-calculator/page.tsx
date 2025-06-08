"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  val1: z.string().min(1, {
    message: "Required",
  }),
  val2: z.string().min(1, {
    message: "Required",
  }),
  val3: z.string().min(1, {
    message: "Required",
  }),
  val4: z.string().min(1, {
    message: "Required",
  }),
  val5: z.string().min(1, {
    message: "Required",
  }),
  val6: z.string().min(1, {
    message: "Required",
  }),
  val7: z.string().min(1, {
    message: "Required",
  }),
  val8: z.string().min(1, {
    message: "Required",
  }),
});

const NptelCalculatorPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      val1: "",
      val2: "",
      val3: "",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "",
    },
  });

  const [result, setResult] = useState<string>("");

  const calculate = (data: z.infer<typeof FormSchema>) => {
    const averageScore =
      (parseInt(data.val1) +
        parseInt(data.val2) +
        parseInt(data.val3) +
        parseInt(data.val4) +
        parseInt(data.val5) +
        parseInt(data.val6) +
        parseInt(data.val7) +
        parseInt(data.val8)) /
      8;

    const finalResult = (averageScore * 25) / 100;
    setResult(finalResult.toFixed(2));
  };

  return (
    <div className="flex flex-col flex-1 h-full w-full items-center justify-center">
      <Form {...form}>
        <div className="w-full max-md:p-5">
          <div className="flex flex-col gap-3 mb-3 items-center text-center">
            <div className="text-center font-bold text-xl ">
              NPTEL Assignment Marks Calculator
            </div>
            <div className="text-sm font-medium text-gray-500">
              Enter Top 8 marks from 12 weeks
            </div>
          </div>
          <form
            onSubmit={form.handleSubmit(calculate)}
            className="w-full mx-auto max-w-xl space-y-3 rounded-lg border-2 p-4 md:p-5"
          >
            <div className="flex gap-5 flex-wrap justify-evenly">
              {Object.keys(form?.control?._options?.defaultValues || {})?.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (key: any, i) => (
                  <FormField
                    key={key}
                    control={form.control}
                    name={key}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Marks {i + 1}</FormLabel>
                        <FormControl>
                          <Input
                            className="h-10 w-24"
                            placeholder="Enter number here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ),
              )}
            </div>
            <Button type="submit" className="w-full" size={"lg"}>
              Calculate
            </Button>
            {/* <div>Average Score: {avgScore}%</div> */}

            <div className="flex flex-col gap-2 text-center">
              {result != ""
                ? parseInt(result) > 10
                  ? "Congratulations! You are passed in the internal."
                  : "Sorry, you are not passed in the internal."
                : ""}

              {result && (
                <div className="my-2 font-medium text-lg text-center border w-max mx-auto p-2 rounded-lg">
                  Result: <span className="text-primary">{result}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default NptelCalculatorPage;
