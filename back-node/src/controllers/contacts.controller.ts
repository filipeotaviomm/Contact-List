import { Request, Response } from "express";
import {
  createContactService,
  deleteContactService,
  getAllContactsPaginationService,
  getAllContactsService,
  getContactByIdService,
  updateContactService,
} from "../services/contacts.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await createContactService(res.locals.decoded.sub, req.body);
  return res.status(201).json(contact);
};

const getAllContactsController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await getAllContactsService(res.locals.decoded.sub);
  return res.status(200).json(contacts);
};

const getAllContactsPaginationController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await getAllContactsPaginationService(res.locals.pagination, res.locals.decoded.sub);
  return res.status(200).json(contacts);
};

const getContactByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await getContactByIdService(req.params.contactId);
  return res.status(200).json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await updateContactService(req.params.contactId, req.body);
  return res.status(200).json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(req.params.contactId);
  return res.status(204).json();
};

export {
  createContactController,
  getAllContactsController,
  getAllContactsPaginationController,
  getContactByIdController,
  updateContactController,
  deleteContactController,
};
