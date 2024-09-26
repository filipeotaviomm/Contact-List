import { Router } from "express";
import { validateBody } from "../middlewares/globals.middleware";
import {
  contactReqSchema,
  contactUpdateSchema,
} from "../schemas/contact.schema";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  updateContactController,
} from "../controllers/contacts.controller";
import { isUserLogged } from "../middlewares/users.middleware";
import { pagination } from "../middlewares/pagination.middleware";

export const contactRouter: Router = Router();

contactRouter.post(
  "/",
  isUserLogged,
  validateBody(contactReqSchema),
  createContactController
);

contactRouter.get("/", isUserLogged,   pagination("/contacts"), getAllContactsController);

contactRouter.get("/:contactId", isUserLogged, getContactByIdController);

contactRouter.patch(
  "/:contactId",
  isUserLogged,
  validateBody(contactUpdateSchema),
  updateContactController
);

contactRouter.delete("/:contactId", isUserLogged, deleteContactController);
