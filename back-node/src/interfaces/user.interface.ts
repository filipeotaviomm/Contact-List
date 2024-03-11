import { z } from "zod";
import {
  loginSchema,
  userReqSchema,
  userRespSchema,
  allUsersRespSchema,
} from "../schemas/user.schema";

type IUserReq = z.infer<typeof userReqSchema>;
type IUserResp = z.infer<typeof userRespSchema>;
type IAllUsersResp = z.infer<typeof allUsersRespSchema>;

interface IUserUpdate {
  avatar?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

type ILoginReq = z.infer<typeof loginSchema>;
type ILoginResp = { token: string };

export {
  IUserReq,
  IUserResp,
  IAllUsersResp,
  IUserUpdate,
  ILoginReq,
  ILoginResp,
};
