"use client";

import { Button } from "@/components/ui/button";
import { Info, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { flashCards } from "@/lib/constants/flash-cards.constant";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Flashcard from "@/components/flash-card";

type FlashCardType = {
  id: number;
  front: string;
  back: string;
};

const FlashCardsPageClient = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const router = useRouter();
  const tabsContainerRef = useRef(null);
  const { subjectId, unit } = useParams();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const subject = flashCards.find(({ key }) => key == subjectId);
  const chapter = subject?.units?.find(({ key }) => key == unit);
  const [currentPracticalIndex, setCurrentPracticalIndex] = useState<number>(
    subject?.units.findIndex(({ key }) => key == unit) || 0,
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleClickPrevious = () => {
    const oldIndex = currentPracticalIndex;
    setCurrentPracticalIndex((prev) => (prev == 0 ? 0 : prev - 1));
    const href = `/flash-cards/${subject?.key}/${
      subject?.units.find((_, i) => i == oldIndex - 1)?.key
    }`;
    router.push(href);
  };
  const handleClickNext = () => {
    const oldIndex = currentPracticalIndex;
    setCurrentPracticalIndex((prev) => (prev == 0 ? 0 : prev + 1));
    const href = `/flash-cards/${subject?.key}/${
      subject?.units.find((_, i) => i == oldIndex + 1)?.key
    }`;
    router.push(href);
  };

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
  }, [chapter?.key]);

  if (!chapter) {
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
        value={chapter.key}
        className="w-full px-2 flex items-center justify-center gap-3 sticky top-16 md:top-20 bg-gray-50 dark:bg-[#212121] border-b z-[9] py-2"
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
          {subject?.units?.map((ele) => (
            <TabsTrigger
              className="text-base h-max"
              key={ele.key}
              value={ele.key}
              asChild
            >
              <Link
                href={`/flash-cards/${subject.key}/${ele.key}`}
                ref={ele?.key === chapter?.key ? activeTabRef : null}
              >
                {ele.title}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant={"outline"}
          className="max-md:hidden"
          disabled={subject?.units?.length == currentPracticalIndex + 1}
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
          disabled={subject?.units?.length == currentPracticalIndex + 1}
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
        <div className="flex items-center justify-center flex-col gap-2 p-5 lg:p-20">
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-96 max-w-[90%]"
          >
            <CarouselContent className="-mt-1 h-[calc(100vh-350px)] min-h-80">
              {chapter?.cards?.map((card: FlashCardType) => (
                <CarouselItem
                  key={card.id}
                  className="pt-1 flex items-center justify-center w-full"
                >
                  <Card className="group h-full flex items-center border-none shadow-none justify-center p-2 w-80">
                    <CardContent className="flex items-center justify-center h-full w-full p-2">
                      <Flashcard front={card.front} back={card.back} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Flashcard {current} of {count}
            </div>
            <CarouselPrevious className="-left-5" />
            <CarouselNext className="-right-5" />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default FlashCardsPageClient;
