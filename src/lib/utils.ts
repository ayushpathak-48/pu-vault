/* eslint-disable prefer-const */
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
