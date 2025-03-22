import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

  return `${hours}.${minutes}`;
}

export const checkIsActiveTime = (timeRange: string | undefined) => {
  if (!timeRange) return;
  const [startTime, endTime] = timeRange.split(" TO ");
  const currentTime = getCurrentTime();
  return currentTime >= startTime && currentTime <= endTime;
};
