import { Contact } from "@prisma/client";
import {
  IContactsResp,
  IContactReq,
  IContactResp,
  IContactUpdate,
} from "../interfaces/contact.interface";
import { prisma } from "../app";
import {
  contactRespSchema,
  contactsRespSchema,
} from "../schemas/contact.schema";

const createContactService = async (
  userId: string,
  data: IContactReq
): Promise<IContactResp> => {
  const contact: Contact = await prisma.contact.create({
    data: { ...data, userId: userId },
  });
  return contactRespSchema.parse(contact);
};

const getAllContactsService = async (
  userId: string
): Promise<IContactsResp> => {
  const contacts: Contact[] = await prisma.contact.findMany({
    where: { userId: userId },
  });
  return contactsRespSchema.parse(contacts);
};

const getContactByIdService = async (
  contactId: string
): Promise<IContactResp | null> => {
  const contact: Contact | null = await prisma.contact.findUnique({
    where: { id: contactId },
  });
  return contact;
};

const updateContactService = async (
  contactId: string,
  //IContactUpdate // não entendi porque essa tipagem não funciona
  data: any
): Promise<IContactUpdate> => {
  const contact = prisma.contact.update({
    where: { id: contactId },
    data: data,
  });
  return contact;
};

const deleteContactService = async (contactId: string): Promise<void> => {
  await prisma.contact.delete({ where: { id: contactId } });
};

export {
  createContactService,
  getAllContactsService,
  getContactByIdService,
  updateContactService,
  deleteContactService,
};
