import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { User } from "@prisma/client";
import { prisma } from "../app";
import { verify } from "jsonwebtoken";

export const isEmailUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const containsEmail = req.body.email;

  if (!containsEmail) return next();

  if (res.locals.decoded) {
    if (res.locals.decoded.email === req.body.email) return next();
  }

  const email: User | null = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (email) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export const isUserLogged = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authorization.split(" ")[1];

  const decoded = verify(token, process.env.SECRET_KEY!);

  res.locals.decoded = decoded;

  return next();
};

export const doesUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user: User | null = await prisma.user.findUnique({
    where: { id: req.params.userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals.user = user;

  return next();
};
