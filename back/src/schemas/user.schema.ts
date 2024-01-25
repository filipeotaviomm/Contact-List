import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  avatar: z.string().max(350),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(15),
  phone: z.number().max(15).or(z.string().max(15)),
  createdAt: z.string(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userReadSchema = userSchema.omit({ password: true });

const userUpdateSchema = userCreateSchema.partial();

const userLoginSchema = userSchema.pick({ name: true, password: true });

export {
  userSchema,
  userCreateSchema,
  userReadSchema,
  userUpdateSchema,
  userLoginSchema,
};
