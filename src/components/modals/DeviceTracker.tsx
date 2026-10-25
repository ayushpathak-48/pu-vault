"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { UAParser } from "ua-parser-js";

export const DeviceTracker = () => {
  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return;
    }

    const deviceTracked = localStorage.getItem("deviceTracked");
    if (!deviceTracked) {
      const saveDevice = async () => {
        try {
          const supabase = createClient(supabaseUrl, supabaseKey);
          const parser = new UAParser();
          const result = parser.getResult();

          const deviceType = result.device.type || "Desktop";
          const deviceModel = result.device.model || "";
          const deviceName = deviceModel
            ? `${deviceType} (${deviceModel})`
            : deviceType;

          const browser = result.browser.name || "Unknown Browser";
          const os = result.os.name || "Unknown OS";

          const { error } = await supabase.from("devices").insert([
            {
              device_name: deviceName,
              browser: browser,
              os: os,
            },
          ]);

          if (!error) {
            localStorage.setItem("deviceTracked", "true");
          }
        } catch (err) {
          // Silent fail for analytics tracking
          console.warn("Device tracker skipped:", err);
        }
      };

      saveDevice();
    }
  }, []);

  return null;
};
