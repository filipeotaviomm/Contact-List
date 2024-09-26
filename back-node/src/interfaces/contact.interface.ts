import { z } from "zod";
import {
  contactReqSchema,
  contactRespSchema,
  contactsRespSchema,
} from "../schemas/contact.schema";

type IContactReq = z.infer<typeof contactReqSchema>;
type IContactResp = z.infer<typeof contactRespSchema>;
type IContacstResp = IContactResp[];
type IContactsResp = z.infer<typeof contactsRespSchema>;

interface IContactUpdate {
  name?: string;
  email?: string | null;
  password?: string;
  phone?: string;
  isFavorite?: boolean;
}

export { IContactReq, IContactResp, IContacstResp, IContactsResp, IContactUpdate };
