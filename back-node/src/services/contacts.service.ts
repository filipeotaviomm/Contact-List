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
import { IAllContacts, IPaginationParams } from "../interfaces/pagination.interface";

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
    orderBy: { createdAt: "asc" },
  });
  return contactsRespSchema.parse(contacts);
};

const getAllContactsPaginationService = async (
  pagination: IPaginationParams,
  userId: string
): Promise<IAllContacts> => {

  const { page,
    perPage,
    prevPage,
    nextPage,
    order,
    sort } = pagination;

  const contacts = await prisma.contact.findMany({
      where: { userId: userId},
      orderBy: { [sort]: order },
      skip: page,
      take: perPage,
    });
  
  const count = await prisma.contact.count();

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: contacts,
    count,
  }  
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
  contactData: IContactUpdate
): Promise<IContactUpdate> => {
  const contact = prisma.contact.update({
    where: { id: contactId },
    data: contactData,
  });
  return contact;
};

const deleteContactService = async (contactId: string): Promise<void> => {
  await prisma.contact.delete({ where: { id: contactId } });
};

export {
  createContactService,
  getAllContactsService,
  getAllContactsPaginationService,
  getContactByIdService,
  updateContactService,
  deleteContactService,
};
