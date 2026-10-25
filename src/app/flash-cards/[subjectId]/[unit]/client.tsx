"use client";

import { Button } from "@/components/ui/button";
import { Info, LoaderCircle, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { useDataGetters } from "@/hooks/use-data-getters";

type FlashCardType = {
  id: number;
  front: string;
  back: string;
};

const FlashCardsPageClient = () => {
  const { getFlashCards } = useDataGetters();
  const flashCards = getFlashCards();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const router = useRouter();
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const { subjectId, unit } = useParams();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const subject = flashCards.find(({ key }) => key === subjectId);
  const chapter = subject?.units?.find(({ key }) => key === unit);
  const currentUnitIndex =
    subject?.units.findIndex(({ key }) => key === unit) ?? 0;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleClickPreviousUnit = () => {
    if (!subject?.units || currentUnitIndex <= 0) return;
    const prevKey = subject.units[currentUnitIndex - 1]?.key;
    router.push(`/flash-cards/${subject.key}/${prevKey}`);
  };

  const handleClickNextUnit = () => {
    if (!subject?.units || currentUnitIndex >= subject.units.length - 1) return;
    const nextKey = subject.units[currentUnitIndex + 1]?.key;
    router.push(`/flash-cards/${subject.key}/${nextKey}`);
  };

  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    setIsLoading(false);
  }, [chapter?.key]);

  if (!chapter) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-6">
        <div className="flex flex-col gap-4 items-center justify-center text-center max-w-md">
          <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Info className="size-8" />
          </div>
          <h2 className="font-bold text-xl text-foreground">Flashcards Set Not Found</h2>
          <p className="text-xs text-muted-foreground">
            The flashcard unit you requested could not be located.
          </p>
          <Button size="sm" asChild className="rounded-xl">
            <Link href="/flash-cards">Back to Flashcards</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Top Navigation Bar with Back Link */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-9 rounded-xl shrink-0"
          >
            <Link href="/flash-cards" title="Back to All Flashcards">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div>
            <span className="text-xs font-semibold text-primary uppercase">
              {subject?.subject_name}
            </span>
            <h1 className="text-base md:text-lg font-bold text-foreground truncate">
              {chapter.title}
            </h1>
          </div>
        </div>

        <div className="text-xs text-muted-foreground font-semibold">
          Card {current} of {count}
        </div>
      </div>

      {/* Unit Selector Tabs */}
      <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-muted/30 border border-border/60">
        <Button
          disabled={currentUnitIndex <= 0}
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 text-xs font-semibold"
          onClick={handleClickPreviousUnit}
        >
          <ChevronLeft className="size-3.5 mr-1" /> Prev Unit
        </Button>

        <Tabs value={chapter.key} className="flex-1 max-w-lg overflow-hidden">
          <TabsList
            ref={tabsContainerRef}
            className="w-full overflow-x-auto gap-2 h-auto p-1 bg-transparent flex justify-start md:justify-center scrollbar-none"
          >
            {subject?.units?.map((ele) => (
              <TabsTrigger
                className="text-xs font-semibold rounded-xl h-8 px-3 shrink-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs"
                key={ele.key}
                value={ele.key}
                asChild
              >
                <Link
                  href={`/flash-cards/${subject.key}/${ele.key}`}
                  ref={ele.key === chapter.key ? activeTabRef : null}
                >
                  {ele.title}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 text-xs font-semibold"
          disabled={!subject?.units || currentUnitIndex >= subject.units.length - 1}
          onClick={handleClickNextUnit}
        >
          Next Unit <ChevronRight className="size-3.5 ml-1" />
        </Button>
      </div>

      {isLoading ? (
        <div className="h-64 w-full flex items-center justify-center">
          <LoaderCircle className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-4">
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}
            className="w-full max-w-md"
          >
            <CarouselContent className="h-[360px] md:h-[400px]">
              {chapter?.cards?.map((card: FlashCardType) => (
                <CarouselItem
                  key={card.id}
                  className="h-full flex items-center justify-center p-2"
                >
                  <Card className="h-full w-full border-none shadow-none bg-transparent">
                    <CardContent className="h-full w-full p-0">
                      <Flashcard front={card.front} back={card.back} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 size-10 rounded-xl" />
              <div className="text-xs font-bold text-muted-foreground">
                {current} / {count}
              </div>
              <CarouselNext className="static translate-y-0 size-10 rounded-xl" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default FlashCardsPageClient;
