import { z } from "zod";
import {
  contactReqSchema,
  contactRespSchema,
  contactUpdateSchema,
  contactsRespSchema,
} from "../schemas/contact.schema";
import { Repository } from "typeorm";
import { Contact } from "../entities";

type IContactReq = z.infer<typeof contactReqSchema>;
type IContactResp = z.infer<typeof contactRespSchema>;
type IContacstResp = z.infer<typeof contactsRespSchema>;
type IContactUpdate = z.infer<typeof contactUpdateSchema>;
type TContactRepo = Repository<Contact>;

export {
  IContactReq,
  IContactResp,
  IContacstResp,
  IContactUpdate,
  TContactRepo,
};
