import * as z from "zod";

export const eventFormSchema = z.object({
  title: z
    .string()
    .min(3, "Event title must be at least 3 characters in length"),
  description: z
    .string()
    .min(3, "Event description must be at least 25 characters in length")
    .max(375, "Event description must be less than 375 characters in length"),
  location: z
    .string()
    .min(3, "Event location must be at least 3 characters in length")
    .max(400, "Event location must be less than 400 characters in length"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
