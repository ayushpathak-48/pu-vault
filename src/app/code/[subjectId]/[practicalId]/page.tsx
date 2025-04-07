import React from "react";
import CodePageClient from "./client";
import { practicalCodes } from "@/lib/constants/codes.constant";

// interface Params {
//   params: {
//     subjectId: string;
//     practicalId: string;
//   };
// }

export async function generateStaticParams() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths: any = [];

  practicalCodes.forEach((code) => {
    code.practicals.forEach((practical) => {
      paths.push({
        subjectId: code.key,
        practicalId: practical?.key,
      });
    });
  });

  return paths;
}

const page = async () => {
  return <CodePageClient />;
};

export default page;
