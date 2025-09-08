"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { UAParser } from "ua-parser-js";

// Setup Supabase client (replace with your keys)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const DeviceTracker = () => {
  useEffect(() => {
    const deviceTracked = localStorage.getItem("deviceTracked");

    if (!deviceTracked) {
      const saveDevice = async () => {
        const parser = new UAParser();
        const result = parser.getResult();

        const deviceType = result.device.type || "Desktop";
        const deviceModel = result.device.model || "";
        const deviceName = deviceModel
          ? `${deviceType} (${deviceModel})`
          : deviceType;

        const browser = result.browser.name || "Unknown Browser";
        const os = result.os.name || "Unknown OS";

        // Save to "devices" table instead of "feedback"
        const { error } = await supabase.from("devices").insert([
          {
            device_name: deviceName,
            browser: browser,
            os: os,
          },
        ]);

        if (!error) {
          localStorage.setItem("deviceTracked", "true");
        } else {
          console.error("Error saving device:", error);
        }
      };

      saveDevice();
    }
  }, []);

  return null;
};
