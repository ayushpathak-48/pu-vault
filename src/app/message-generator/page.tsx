"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useDataGetters } from "@/hooks/use-data-getters";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  MailIcon,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Info,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { MessageGeneratorSchema } from "@/lib/schema/message-generator-schema";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDataStore } from "@/stores/data.store";
import { toast } from "sonner";
import Image from "next/image";

const lectureDetails = [
  { lecture: 1, time: "07:30 TO 08:25" },
  { lecture: 2, time: "08:25 TO 09:20" },
  { lecture: 3, time: "09:30 TO 10:25" },
  { lecture: 4, time: "10:25 TO 11:20" },
  { lecture: 5, time: "12:20 TO 01:15" },
  { lecture: 6, time: "01:15 TO 02:10" },
];

export default function MessageGeneratorPage() {
  const { getMessageFormats } = useDataGetters();
  const user = useDataStore((state) => state.user);
  const setUser = useDataStore((state) => state.setUser);

  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const form = useForm<z.infer<typeof MessageGeneratorSchema>>({
    resolver: zodResolver(MessageGeneratorSchema),
    defaultValues: {
      name: user?.name || "",
      reason: "",
      enrollment: user?.enrollment || "",
      is_present: false,
      type: "whatsapp",
      gender: "male",
      date: new Date(),
      time: "07:30 TO 08:25",
      lecture: "1",
    },
  });

  function generateMessage(data: z.infer<typeof MessageGeneratorSchema>) {
    const lectureObject = lectureDetails.find(
      ({ lecture }) => lecture === parseInt(data.lecture),
    );
    data.time = lectureObject?.time || "07:30 TO 08:25";
    const msg = getMessageFormats(data);
    setMessage(msg);
  }

  function onSubmit(data: z.infer<typeof MessageGeneratorSchema>) {
    setUser({
      name: data.name,
      enrollment: data.enrollment,
    });
    generateMessage(data);
    toast.success("Message generated successfully!");
  }

  const handleCopy = () => {
    if (!message) return;
    try {
      navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Message copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  useEffect(() => {
    const values = form.getValues();
    if (values.name && values.enrollment) {
      generateMessage(values);
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6 md:space-y-8">
      {/* Header Glass Banner */}
      <div className="p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase flex items-center gap-1 backdrop-blur-md">
            <MailIcon className="size-3" /> Communication Tool
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Attendance Discrepancy Message Generator
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl leading-relaxed">
          Quickly generate formal, polite emails and WhatsApp messages for your professors and course coordinators if you were mistakenly marked absent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7 p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Full Name" className="rounded-xl h-10" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enrollment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold">Enrollment No.</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Enrollment" className="rounded-xl h-10" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="lecture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold">Lecture Slot</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-10 text-xs">
                            <SelectValue placeholder="Slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {lectureDetails.map((l) => (
                            <SelectItem key={l.lecture} value={l.lecture.toString()} className="text-xs">
                              Lecture {l.lecture} ({l.time})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold">Addressing</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-10 text-xs">
                            <SelectValue placeholder="Salutation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male" className="text-xs">Sir</SelectItem>
                          <SelectItem value="female" className="text-xs">Ma&apos;am</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold">Format</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-10 text-xs">
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="whatsapp" className="text-xs">WhatsApp</SelectItem>
                          <SelectItem value="email" className="text-xs">Formal Email</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-xs font-semibold">Lecture Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full rounded-xl h-10 pl-3 text-left font-normal text-xs border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-zinc-900/40",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick lecture date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("2024-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="is_present"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-xl border border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-white/[0.04] p-3 h-10 mt-auto backdrop-blur-md">
                      <FormLabel className="text-xs font-medium cursor-pointer">
                        I was physically present
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold">
                      Reason (Optional if you were absent)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. unwell / attending campus interview"
                        className="rounded-xl h-10 text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full rounded-xl font-bold h-11 gap-2 shadow-xs bg-primary text-primary-foreground hover:bg-primary/90">
                <Sparkles className="size-4" /> Generate Formatted Message
              </Button>
            </form>
          </Form>
        </div>

        {/* Live Preview Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] space-y-4">
            <div className="flex items-center justify-between border-b border-white/40 dark:border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="size-4 text-primary" />
                <h3 className="font-bold text-sm text-foreground">Generated Message Preview</h3>
              </div>
              {message && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  className="rounded-xl h-9 px-3 text-xs font-semibold gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              )}
            </div>

            {message ? (
              <div className="space-y-4">
                <Textarea
                  readOnly
                  value={message}
                  className="min-h-[260px] font-mono text-xs rounded-2xl bg-white/40 dark:bg-black/30 border border-white/50 dark:border-white/[0.08] backdrop-blur-md leading-relaxed resize-none p-4"
                />

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleCopy}
                    className="flex-1 rounded-xl h-11 font-semibold text-xs gap-1.5 shadow-xs bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Copy className="size-3.5" /> Copy to Clipboard
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl h-10 px-3 text-xs"
                    onClick={() => {
                      window.open(
                        `https://wa.me/?text=${encodeURIComponent(message)}`,
                        "_blank",
                      );
                    }}
                    title="Send via WhatsApp"
                  >
                    <Image
                      src="/icons/whatsapp.png"
                      height={18}
                      width={18}
                      alt="WhatsApp"
                      className="size-4"
                    />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-muted-foreground space-y-2">
                <Info className="size-8 mx-auto text-muted-foreground" />
                <p className="text-xs">
                  Fill in your lecture details and click <strong>&quot;Generate Formatted Message&quot;</strong> to see the preview here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
