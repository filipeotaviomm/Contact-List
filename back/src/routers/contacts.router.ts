import { Router } from "express";
import { validateBody } from "../middlewares/globals.middleware";
import { contactReqSchema } from "../schemas/contact.schema";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  updateContactController,
} from "../controllers/contacts.controller";
import { isEmailUnique, isUserLogged } from "../middlewares/users.middleware";

export const contactRouter: Router = Router();

contactRouter.post(
  "/",
  isUserLogged,
  validateBody(contactReqSchema),
  isEmailUnique,
  createContactController
);

contactRouter.get("/", isUserLogged, getAllContactsController);

contactRouter.get("/:contactId", isUserLogged, getContactByIdController);

contactRouter.patch("/:contactId", isUserLogged, updateContactController);

contactRouter.delete("/:contactId", isUserLogged, deleteContactController);
