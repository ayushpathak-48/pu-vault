"use client";

import { useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { UAParser } from "ua-parser-js"; // ✅ named import, not default

// Setup Supabase client (replace with your keys)
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// );

export const FeedbackDialog = () => {
  useEffect(() => {
    const feedbackSubmitted = localStorage.getItem("feedbackSubmitted");

    if (!feedbackSubmitted) {
      // const saveVisit = async () => {
      //   const parser = new UAParser();
      //   const result = parser.getResult();
      //   const deviceType = result.device.type || "Desktop";
      //   const deviceModel = result.device.model || "";
      //   const deviceName = deviceModel
      //     ? `${deviceType} (${deviceModel})`
      //     : deviceType;
      //   const browser = result.browser.name || "Unknown Browser";
      //   const os = result.os.name || "Unknown OS";
      //   const { error } = await supabase.from("feedback").insert([
      //     {
      //       name: "Anonymous",
      //       feedback: `new-device | ${deviceName} | ${browser} | ${os}`,
      //     },
      //   ]);
      //   if (!error) {
      //     localStorage.setItem("feedbackSubmitted", "true");
      //   } else {
      //     console.error("Error saving visit:", error);
      //   }
      // };
      // saveVisit();
    }
  }, []);

  return null; // nothing rendered
};
