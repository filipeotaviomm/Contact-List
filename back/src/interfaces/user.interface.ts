import { z } from "zod";
import {
  loginSchema,
  userReqSchema,
  userRespSchema,
  allUsersRespSchema,
  userUpdateSchema,
} from "../schemas/user.schema";

type IUserReq = z.infer<typeof userReqSchema>;
type IUserResp = z.infer<typeof userRespSchema>;
type IAllUsersResp = z.infer<typeof allUsersRespSchema>;
type IUserUpdate = z.infer<typeof userUpdateSchema>;

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
