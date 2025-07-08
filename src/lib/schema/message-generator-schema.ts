import { z } from "zod";

export const MessageGeneratorSchema = z.object({
  name: z.string().min(1, {
    message: "name must be at least 2 characters.",
  }),
  reason: z.string().optional(),
  enrollment: z.string().min(13, {
    message: "Enrollment must be at least 13 characters.",
  }),
  is_present: z.boolean(),
  type: z.enum(["whatsapp", "email"]).default("whatsapp"),
  gender: z.enum(["male", "female"]).default("male"),
  date: z.date(),
  time: z.string(),
  lecture: z.number(),
});
