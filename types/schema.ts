import { z } from "zod";

export const onBoardingSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  zip: z.coerce.number().int().min(1000, {
    message: "Invalid zip code",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),

  acceptance: z.boolean(),
  phone: z.coerce.number().int().min(1000000000, {
    message: "Invalid phone number",
  }),
});
