import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from "../controllers/users.controller";
import { isEmailUnique, isUserLogged } from "../middlewares/users.middleware";
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

userRouter.get("/:userId", isUserLogged, getUserByIdController);

userRouter.patch(
  "/:userId",
  isUserLogged,
  validateBody(userUpdateSchema),
  isEmailUnique,
  updateUserController
);

userRouter.delete("/:userId", isUserLogged, deleteUserController);
