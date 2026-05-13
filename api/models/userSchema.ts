import { z } from 'zod';

//
// 🔹 Common Meta Schema (Reusable)
//
export const metaSchema = z.object({
  powered_by: z.string(),
  docs_url: z.string().url(),
  upgrade_url: z.string().url(),
  example_url: z.string().url(),
  variant: z.string(),
  message: z.string(),
  cta: z.object({
    label: z.string(),
    url: z.string().url()
  }),
  context: z.string()
});

//
// 🔹 Support Schema (GET API)
//
export const supportSchema = z.object({
  url: z.string().url(),
  text: z.string()
});

//
// 🔹 User Data Schema (GET API)
//
export const userDataSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string().url()
});

//
// 🔹 GET /api/users/2 Schema
//
export const getUserSchema = z.object({
  data: userDataSchema,
  support: supportSchema,
  _meta: metaSchema
});

//
// 🔹 POST /api/users Schema
//
export const createUserSchema = z.object({
  name: z.string(),
  job: z.string(),
  id: z.string(), // API returns string
  createdAt: z.string().datetime(),
  _meta: metaSchema
});

//
// 🔹 Optional: Types (VERY GOOD PRACTICE)
//
export type GetUserResponse = z.infer<typeof getUserSchema>;
export type CreateUserResponse = z.infer<typeof createUserSchema>;