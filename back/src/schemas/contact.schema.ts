import { z } from "zod";

const contactCategory = z.enum([
  "work",
  "family",
  "school",
  "friends",
  "standard",
]);

const contactSchema = z.object({
  id: z.string(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  phone: z.number().max(15),
  category: contactCategory,
  createdAt: z.string(),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactsReadSchema = z.array(contactSchema);

const contactUpdateSchema = contactCreateSchema.partial();

export {
  contactSchema,
  contactCreateSchema,
  contactsReadSchema,
  contactUpdateSchema,
};
