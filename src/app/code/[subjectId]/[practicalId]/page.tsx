"use client";

import { Button } from "@/components/ui/button";
import { practicalCodes } from "@/lib/constants/codes.constant";
import { Info, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "./code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodePage = () => {
  const router = useRouter();
  const tabsContainerRef = useRef(null);
  const { subjectId, practicalId } = useParams();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const allPracticals = practicalCodes.find(({ key }) => key == subjectId);
  const practical = allPracticals?.practicals?.find(
    ({ key }) => key == practicalId
  );
  const [currentPracticalIndex, setCurrentPracticalIndex] = useState<number>(
    allPracticals?.practicals.findIndex(({ key }) => key == practicalId) || 0
  );

  const handleClickPrevious = () => {
    const oldIndex = currentPracticalIndex;
    setCurrentPracticalIndex((prev) => (prev == 0 ? 0 : prev - 1));
    const href = `/code/${allPracticals?.key}/${
      allPracticals?.practicals.find((_, i) => i == oldIndex - 1)?.key
    }`;
    router.push(href);
  };
  const handleClickNext = () => {
    const oldIndex = currentPracticalIndex;
    setCurrentPracticalIndex((prev) => (prev == 0 ? 0 : prev + 1));
    const href = `/code/${allPracticals?.key}/${
      allPracticals?.practicals.find((_, i) => i == oldIndex + 1)?.key
    }`;
    router.push(href);
  };

  useEffect(() => {
    setIsLoading(false);
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
      <Tabs
        value={practical.key}
        className="w-full px-2 flex items-center justify-center gap-3 sticky top-16 md:top-20 bg-gray-50 border-b z-[9] py-2"
      >
        <Button
          disabled={currentPracticalIndex == 0}
          variant={"outline"}
          className="max-md:hidden"
          onClick={handleClickPrevious}
        >
          Previous
        </Button>{" "}
        <TabsList
          ref={tabsContainerRef}
          className="w-full overflow-x-auto gap-10 h-max flex items-center py-2 justify-evenly"
        >
          {allPracticals?.practicals?.map((ele) => (
            <TabsTrigger
              className="text-base h-max"
              key={ele.key}
              value={ele.key}
              asChild
            >
              <Link
                href={`/code/${allPracticals.key}/${ele.key}`}
                ref={ele?.key === practical?.key ? activeTabRef : null}
              >
                {ele.name}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant={"outline"}
          className="max-md:hidden"
          disabled={
            allPracticals?.practicals?.length == currentPracticalIndex + 1
          }
          onClick={handleClickNext}
        >
          Next
        </Button>
      </Tabs>
      <div className="flex items-center justify-between gap-4 md:hidden mt-1 w-full px-5">
        <Button
          disabled={currentPracticalIndex == 0}
          variant={"outline"}
          onClick={handleClickPrevious}
          className="w-full"
        >
          Previous
        </Button>{" "}
        <Button
          variant={"outline"}
          disabled={
            allPracticals?.practicals?.length == currentPracticalIndex + 1
          }
          className="w-full"
          onClick={handleClickNext}
        >
          Next
        </Button>
      </div>
      {isLoading ? (
        <div className="h-96 w-full flex items-center justify-center">
          <LoaderCircle className="animate-spin size-6" />
        </div>
      ) : (
        <div className="flex flex-col gap-2 p-5 lg:p-10">
          {practical?.pageBlocks?.map((ele, i) => (
            <div key={ele.type + "_" + i}>
              {ele.type == "heading" && (
                <h2 className="text-2xl font-bold text-slate-700 text-center my-2">
                  {ele.value}
                </h2>
              )}
              {ele.type == "code" && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <span className="text-gray-500 text-sm">
                        {/* {ele?.is_output ? "Output : " : "filename:"} */}
                        filename:
                      </span>{" "}
                      {ele.fileName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5">
                    <CodeBlock
                      code={ele.value}
                      language={
                        ele?.language || allPracticals?.language || "python"
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
