import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  avatar: z.string().max(350).optional().nullable(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string(),
  phone: z.string().max(15),
  createdAt: z.date(),
});

const userReqSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userRespSchema = userSchema.omit({ password: true });

const allUsersRespSchema = userSchema.omit({ password: true }).array();

const userUpdateSchema = userReqSchema.partial();

const loginSchema = userSchema.pick({ email: true, password: true });

export {
  userSchema,
  userReqSchema,
  userRespSchema,
  allUsersRespSchema,
  userUpdateSchema,
  loginSchema,
};
