import * as z from "zod";

export const UserValidation = z.object({
  name: z.string().min(3).max(30),
  profile_photo: z.string().url(),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
