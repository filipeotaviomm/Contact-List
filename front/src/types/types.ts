import React from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  label?: string;
  id?: string;
  readOnly?: boolean;
}

export type ILoginFormValues = {
  email: string;
  password: string;
};

export type IRegisteFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  phone: number | string;
};

export interface IListContact {
  id: string;
  name: string;
  email: string;
  phone: number | string;
  category: string;
  createdAt: string;
}

export interface ICardContact {
  favorite: IListContact;
}

export interface IUserContext {}
