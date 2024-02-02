import { z } from "zod";
import {
  contactReqSchema,
  contactRespSchema,
  contactUpdateSchema,
  contactsRespSchema,
} from "../schemas/contact.schema";

type IContactReq = z.infer<typeof contactReqSchema>;
type IContactResp = z.infer<typeof contactRespSchema>;
type IContactsResp = z.infer<typeof contactsRespSchema>;
type IContactUpdate = z.infer<typeof contactUpdateSchema>;

export { IContactReq, IContactResp, IContactsResp, IContactUpdate };
