// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { practicalCodes } from "@/lib/constants/codes.constant";
import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";
import CodeBlock from "./code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";

const CodePage = () => {
  const { subjectId, practicalId } = useParams();
  const practical = practicalCodes
    .find(({ key }) => key == subjectId)
    ?.practicals?.find(({ key }) => key == practicalId);

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
    <div className="flex flex-col gap-2 p-5 lg:p-10">
      {practical.pageBlocks.map((ele, i) => (
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
                  <span className="text-gray-500 text-sm">filename:</span>{" "}
                  {ele.fileName}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5">
                <CodeBlock code={ele.value} language="python" />
              </CardContent>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default CodePage;
