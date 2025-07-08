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
import { CalendarIcon, MailIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { MessageGeneratorSchema } from "@/lib/schema/message-generator-schema";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
import { professorDetails } from "@/lib/constants/professor-details.constant";
import Link from "next/link";
import { toast } from "sonner";

const lectureDetails = [
  {
    lecture: 1,
    time: "07:30 TO 08:25",
  },
  {
    lecture: 2,
    time: "08:25 TO 09:20",
  },
  {
    lecture: 3,
    time: "09:30 TO 10:25",
  },
  {
    lecture: 4,
    time: "10:25 TO 11:20",
  },
  {
    lecture: 5,
    time: "12:20 TO 01:15",
  },
  {
    lecture: 6,
    time: "01:15 TO 02:10",
  },
];

const MessageGeneratorPage = () => {
  const { getMessageFormats } = useDataGetters();
  const user = useDataStore((state) => state.user);
  const setUser = useDataStore((state) => state.setUser);

  const [message, setMessage] = useState("");
  const [searchText, setSearchText] = useState("");
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
      time: "",
      lecture: 1,
    },
  });

  function onSubmit(data: z.infer<typeof MessageGeneratorSchema>) {
    setUser({
      name: form.getValues("name"),
      enrollment: form.getValues("enrollment"),
    });
    const lectureObject = lectureDetails.find(
      ({ lecture }) => lecture == form.getValues("lecture"),
    );
    data.time = lectureObject?.time || "";
    const msg = getMessageFormats(data);
    setMessage(msg);

    const element = document.getElementById("generated-message");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Message copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log({ error });
      toast.success("Failed to copy! Try manually...");
    }
  };

  useEffect(() => {
    const subscription = form.watch((_, { name }) => {
      if (name != "type") {
        setMessage("");
      }
    });

    return () => subscription.unsubscribe(); // cleanup on unmount
  }, [form]);

  return (
    <>
      <div className="flex items-center justify-center py-10 flex-col gap-4">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="font-medium text-xl">Leave Message Generator</div>
          <div className="text-xs text-muted-foreground text-center px-1">
            Don&apos;t use this for fun or spamming. It&apos;s for students
            whose attendance is marked as absent.
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="md:w-2/3 space-y-6 rounded-lg p-4 border border-gray-800"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enrollment"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Enrollment Id</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Enrollment Id"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Reason" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-max">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
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
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lecture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>lecture</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified lecture to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {lectureDetails.map((lecture) => (
                        <SelectItem
                          key={lecture.lecture}
                          value={lecture.lecture.toString()}
                        >
                          {lecture.lecture}) Time:- {lecture.time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_present"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Are you present in the lecture?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center gap-4 w-full">
              <Button
                type="button"
                variant={"outline"}
                className={cn(
                  form.watch("gender") == "male" &&
                    "border-primary text-primary",
                )}
                onClick={() => form.setValue("gender", "male")}
              >
                Sir
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className={cn(
                  form.watch("gender") == "female" &&
                    "border-primary text-primary",
                )}
                onClick={() => form.setValue("gender", "female")}
              >
                Ma&apos;am
              </Button>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                type="button"
                variant={"outline"}
                className="border border-primary bg-secondary"
                onClick={() => {
                  form.setValue("type", "whatsapp");
                  form.handleSubmit(onSubmit)();
                }}
              >
                Generate Message
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className="border border-primary bg-secondary"
                onClick={() => {
                  form.setValue("type", "email");
                  form.handleSubmit(onSubmit)();
                }}
              >
                Generate Email
              </Button>
            </div>
          </form>
        </Form>
        {message && (
          <div id="generated-message" className=" px-5 w-full">
            <Separator />
            <div className="w-full md:w-2/3 flex flex-col gap-2 mx-auto my-3">
              <div className="flex items-center justify-between gap-2">
                <Label
                  htmlFor="message"
                  className="text-xl font-medium text-primary"
                >
                  Generated Message
                </Label>
                <Button
                  type="button"
                  variant={copied ? "outline" : "default"}
                  onClick={handleCopy}
                >
                  {copied ? "Copied..." : "Copy"}
                </Button>
              </div>
              <Textarea
                rows={15}
                disabled
                id="message"
                className="bg-secondary resize-none text-md disabled:opacity-85"
                value={message}
                onChange={() => {}}
              ></Textarea>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-2 mt-3 flex-wrap gap-2 max-sm:justify-center">
              <div className="font-medium text-lg">Send to Professor</div>
              <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Professor name..."
                className="max-w-sm"
              />
            </div>
            <div className="min-h-40 flex flex-col gap-2 w-full">
              {professorDetails.filter(({ name }) =>
                name.toLowerCase().includes(searchText.toLowerCase()),
              ).length == 0 && (
                <div className="h-40 text-center flex items-center justify-center">
                  No Professor Found with the name {searchText}
                </div>
              )}
              {professorDetails
                .filter(({ name }) =>
                  name.toLowerCase().includes(searchText.toLowerCase()),
                )
                .map((professor) => (
                  <div
                    key={professor.id}
                    className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
                  >
                    <h2>{professor.name}</h2>
                    <div className="flex items-center gap-2">
                      <Button variant={"outline"} size={"sm"} asChild>
                        <Link
                          href={`https://wa.me/${
                            professor.phone
                          }?text=${encodeURIComponent(message)}`}
                          target="_blank"
                          className="font-medium primary"
                        >
                          Whatsapp
                        </Link>
                      </Button>
                      <Button variant={"secondary"} size={"sm"} asChild>
                        <Link
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${
                            professor.email
                          }&su=Attendance%20Not%20Marked&body=${encodeURIComponent(
                            message,
                          )}`}
                          target="_blank"
                          className="font-medium primary"
                        >
                          Gmail
                        </Link>
                      </Button>
                      <Button variant={"secondary"} size={"sm"} asChild>
                        <Link
                          href={`mailto:${
                            professor.email
                          }?subject=Attendance%20Not%20Marked&body=${encodeURIComponent(
                            message,
                          )}`}
                          target="_blank"
                          className="font-medium primary"
                        >
                          <MailIcon />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessageGeneratorPage;
