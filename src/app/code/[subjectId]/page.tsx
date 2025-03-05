"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { practicalCodes } from "@/lib/constants/codes.constant";
import { Loader } from "lucide-react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CodeBlock from "./code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useQueryState } from "nuqs";

type CodeElementType = {
  type: string;
  value: string;
  fileName?: string;
  is_output?: boolean;
  language?: string;
};

const CodePage = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const { subjectId } = useParams();
  const [practicalId, setPracticalId] = useQueryState("practical", {
    defaultValue: "",
    history: "replace",
  });
  const [isLoading, setIsLoading] = useState(true);
  const practicalSubject = practicalCodes.find(({ key }) => key == subjectId);

  const [startIndex, setStartIndex] = useState<number>(0);

  useLayoutEffect(() => {
    setStartIndex(
      practicalSubject?.practicals.findIndex((ele) => ele.key == practicalId) ||
        0
    );
  }, []);

  useLayoutEffect(() => {
    if (!practicalId) {
      setPracticalId(practicalSubject?.practicals[0].key || "");
    }
    setIsLoading(false);
  }, [practicalId]);

  useEffect(() => {
    if (!api) {
      return;
    }
    api?.on("select", (e) => {
      setTimeout(() => {
        const currentSlide = e.selectedScrollSnap();
        setTimeout(() => {
          setPracticalId(practicalSubject?.practicals[currentSlide].key || "");
        }, 1000);
      });
    });
  }, [api]);

  const handleTabValueChange = (key: string) => {
    const index =
      practicalSubject?.practicals.findIndex((ele) => ele.key == key) || 0;
    setPracticalId(key);
    api?.scrollTo(index, true);
  };

  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="animate-spin size-5" />
      </div>
    );
  }

  return (
    <>
      <Tabs
        value={practicalId}
        className="w-full px-2 flex items-center justify-center gap-3 sticky top-16 md:top-20 bg-gray-50 border-b z-[9] py-2"
      >
        <Button
          disabled={!api?.canScrollPrev()}
          variant={"outline"}
          className="max-md:hidden"
          onClick={() => {
            api?.scrollPrev();
          }}
        >
          Previous
        </Button>
        <TabsList className="w-full overflow-x-auto gap-10 h-max flex items-center py-2 justify-evenly">
          {practicalSubject?.practicals?.map((ele) => (
            <TabsTrigger
              className="text-base h-max"
              key={ele.key}
              value={ele.key}
              onClick={() => {
                handleTabValueChange(ele.key);
              }}
            >
              {ele.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant={"outline"}
          className="max-md:hidden"
          disabled={!api?.canScrollNext()}
          onClick={() => {
            api?.scrollNext();
          }}
        >
          Next
        </Button>
      </Tabs>
      <div className="flex items-center justify-between gap-4 md:hidden mt-1 w-full px-5">
        <Button
          disabled={!api?.canScrollPrev()}
          variant={"outline"}
          onClick={() => {
            api?.scrollPrev();
          }}
          className="w-full"
        >
          Previous
        </Button>{" "}
        <Button
          variant={"outline"}
          disabled={!api?.canScrollNext()}
          className="w-full"
          onClick={() => {
            api?.scrollNext();
          }}
        >
          Next
        </Button>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          startIndex: startIndex,
        }}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {practicalSubject?.practicals.map((ele, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col gap-2 p-5 lg:p-10">
                {ele?.pageBlocks?.map((ele: CodeElementType, i) => (
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
                              {ele?.is_output ? "Output : " : "filename:"}
                            </span>{" "}
                            {ele.fileName}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-5">
                          <CodeBlock
                            is_output={ele?.is_output}
                            code={ele.value}
                            language={
                              ele?.language ||
                              practicalSubject?.language ||
                              "python"
                            }
                          />
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default CodePage;
