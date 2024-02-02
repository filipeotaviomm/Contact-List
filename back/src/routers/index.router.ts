import { Router } from "express";
import { userRouter } from "./users.router";
import { sessionRouter } from "./session.router";
import { contactRouter } from "./contacts.router";

export const router: Router = Router();

router.use("/users", userRouter);
router.use("/login", sessionRouter);
router.use("/contacts", contactRouter);
