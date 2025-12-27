/* eslint-disable prefer-const */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { telegramBotChatIds } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime() {
  const now = new Date();
  let hours: string | number = now.getHours();
  let minutes: string | number = now.getMinutes();

  // Ensure two-digit format
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
}

export const checkIsActiveTime = (timeRange: string | undefined) => {
  if (!timeRange || !timeRange.includes(" TO ")) return false;

  const [startTime, endTime] = timeRange.split(" TO ");
  if (!startTime || !endTime) return false;

  const currentTime = getCurrentTime();

  const toMinutes = (time: string) => {
    if (!time.includes(":")) return 0;
    let [hours, minutes] = time.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) return 0;
    if (hours < 6) hours += 12;
    return hours * 60 + minutes;
  };

  const current = toMinutes(currentTime);
  const start = toMinutes(startTime);
  const end = toMinutes(endTime);
  return current >= start && current < end;
};

export const downloadFile = async (fileUrl: string) => {
  try {
    const response = await fetch(fileUrl, {
      mode: "cors", // allow CORS
    });

    if (!response.ok) throw new Error("Network response was not ok");
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileUrl.split("/").pop() || "pdf-file";
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Download failed:", err);
  }
};

export function isWithinTimeRange() {
  const startHour = 9;
  const startMinute = 0;
  const endHour = 11;
  const endMinute = 30;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

export const sendBotMessage = async ({
  chatId = telegramBotChatIds.githubPuVaultChannel,
  message,
}: {
  chatId?: string | number;
  message: string;
}) => {
  try {
    const botToken = process.env.NEXT_TELEGRAM_BOT_TOKEN!;
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (error) {
    console.error("Error sending bot message:", error);
  }
};
