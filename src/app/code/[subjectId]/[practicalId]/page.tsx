"use client";

import { Button } from "@/components/ui/button";
import { Info, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "../code-block";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDataGetters } from "@/hooks/use-data-getters";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type CodeElementType = {
  type: string;
  value: string;
  fileName?: string;
  is_output?: boolean;
  language?: string;
  description?: string;
  className?: string;
  title?: string;
};

const CodePage = () => {
  const router = useRouter();

  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();

  const tabsContainerRef = useRef(null);
  const { subjectId, practicalId } = useParams();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const practicalSubject = practicalCodes.find(({ key }) => key == subjectId);
  const practical = practicalSubject?.practicals?.find(
    ({ key }) => key == practicalId,
  );

  useEffect(() => {
    if (
      activeTabRef?.current &&
      activeTabRef?.current &&
      tabsContainerRef.current
    ) {
      activeTabRef?.current?.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "center",
      });
    }
    setIsLoading(false);
  }, [practical?.key]);

  if (!practical) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <Info className="text-orange-300 font-bold size-20" />
          <div className="font-medium text-2xl">Invalid Practical Link</div>
          <Button size={"lg"} asChild>
            <Link href={"/"}>Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-3">
        <SelectGroup className="bg-gray-100 dark:bg-[#181818] p-3">
          <SelectLabel className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
            Select Practical
          </SelectLabel>
          <Select value={practical.key} onValueChange={(value) => {
            const href = `/code/${practicalSubject?.key}/${value}`;
            router.push(href);
          }}>
            <SelectTrigger className="w-full bg-background">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {practicalSubject?.practicals?.map((ele) => (
                <SelectItem key={ele.key} value={ele.key}>
                  {ele.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select >
        </SelectGroup>
      </div>
      {
        isLoading ? (
          <div className="h-96 w-full flex items-center justify-center" >
            <LoaderCircle className="animate-spin size-6" />
          </div >
        ) : (
          <div className="flex flex-col gap-3 p-3">
            {practical?.pageBlocks?.map((ele: CodeElementType, i) => (
              <div key={ele.type + "_" + i} className="w-full">
                {ele.type == "btn" && (
                  <div className="flex items-center justify-between p-4 py-2 rounded bg-gray-50 dark:bg-[#212121]  mx-5">
                    <div className="font-medium">{ele.title}</div>
                    <Button className="" asChild size={"sm"}>
                      <Link
                        href={ele.value}
                        target="_blank"
                        className="bg-primary hover:bg-primary/90"
                      >
                        Download File
                      </Link>
                    </Button>
                  </div>
                )}

                {ele.type == "heading" && (
                  <h2
                    className={cn(
                      "text-2xl font-bold text-slate-700 dark:text-slate-300 text-center my-2",
                      ele?.className,
                    )}
                  >
                    {ele.value}
                  </h2>
                )}
                {ele.type == "description" && (
                  <p
                    className={cn(
                      "text-base text-gray-700 dark:text-gray-400 mt-3",
                      ele?.className,
                    )}
                  >
                    {ele.value}
                  </p>
                )}
                {ele.type == "code" && (
                  <Card>
                    <CardHeader
                      className={cn(
                        "p-2",
                        !ele?.is_output &&
                        !ele?.fileName &&
                        !ele?.description &&
                        "hidden",
                      )}
                    >
                      {ele.description && (
                        <CardDescription>{ele?.description}</CardDescription>
                      )}
                      {(ele?.is_output || ele?.fileName) && (
                        <CardTitle>
                          <span className="text-gray-500 text-sm">
                            {ele?.is_output ? "Output :" : "filename:"}
                          </span>
                          {ele.fileName}
                        </CardTitle>
                      )}{" "}
                    </CardHeader>
                    <CardContent className="p-0">
                      <CodeBlock
                        is_output={ele?.is_output}
                        code={ele.value.trim()}
                        language={
                          ele?.language || practicalSubject?.language || "python"
                        }
                      />
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default CodePage;
