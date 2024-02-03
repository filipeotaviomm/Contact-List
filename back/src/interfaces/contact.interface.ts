import { z } from "zod";
import {
  contactReqSchema,
  contactRespSchema,
  contactsRespSchema,
} from "../schemas/contact.schema";

type IContactReq = z.infer<typeof contactReqSchema>;
type IContactResp = z.infer<typeof contactRespSchema>;
type IContactsResp = z.infer<typeof contactsRespSchema>;

interface IContactUpdate {
  avatar?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export { IContactReq, IContactResp, IContactsResp, IContactUpdate };
