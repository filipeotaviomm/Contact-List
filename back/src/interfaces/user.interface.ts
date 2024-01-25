import { z } from "zod";
import {
  loginSchema,
  userReqSchema,
  userRespSchema,
  userUpdateSchema,
} from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type IUserReq = z.infer<typeof userReqSchema>;
type IUserResp = z.infer<typeof userRespSchema>;
type IUserUpdate = DeepPartial<typeof userUpdateSchema>;
type TUserRepo = Repository<User>;

type ILoginReq = z.infer<typeof loginSchema>;
type ILoginResp = { token: string };

export { IUserReq, IUserResp, IUserUpdate, TUserRepo, ILoginReq, ILoginResp };
