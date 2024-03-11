import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/users.controller";
import {
  doesUserExist,
  isEmailUnique,
  isUserLogged,
} from "../middlewares/users.middleware";
import { validateBody } from "../middlewares/globals.middleware";
import { userReqSchema, userUpdateSchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post(
  "/",
  validateBody(userReqSchema),
  isEmailUnique,
  createUserController
);

userRouter.get("/", isUserLogged, getAllUsersController);

userRouter.get("/:userId", doesUserExist, isUserLogged, getUserByIdController);

userRouter.patch(
  "/:userId",
  doesUserExist,
  isUserLogged,
  validateBody(userUpdateSchema),
  isEmailUnique,
  updateUserController
);

userRouter.delete(
  "/:userId",
  doesUserExist,
  isUserLogged,
  deleteUserController
);
