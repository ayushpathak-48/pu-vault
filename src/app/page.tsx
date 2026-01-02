/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDataGetters } from "@/hooks/use-data-getters";
import { alertContent } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const { getMaterials, getSpecializationMaterials } = useDataGetters();
  const materials = getMaterials();
  const specializationMaterials = getSpecializationMaterials();

  return (
    <div className="w-full h-full">
      {alertContent?.length > 0 &&
        <><div className="flex items-center flex-col gap-2 p-2 md:p-5">
          <div className="text-lg font-medium">Important Links</div>
          {alertContent?.map((alert: any) => (
            <div
              key={alert?.id}
              className="flex items-center justify-between p-2 rounded bg-gray-50 dark:bg-[#212121] w-full"
            >
              <div className="font-medium">{alert?.title}</div>
              <Button className="" asChild size={"sm"}>
                <Link
                  href={alert?.href}
                  target="_blank"
                  className="bg-primary hover:bg-primary/90"
                >
                  View
                </Link>
              </Button>
            </div>
          ))}
        </div>
          <Separator className="my-2" />
        </>
      }
      {materials.length > 0 || specializationMaterials.length > 0 ? (
        <div className="p-5 h-full">
          <HomePageAccordionList
            tabData={materials}
            specializationTabData={specializationMaterials}
          />
        </div>
      ) : (
        <CustomErrorPage errorText="Materials not available right now" />
      )}
    </div>
  );
}
