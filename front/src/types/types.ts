import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  label?: string;
  id?: string;
  readOnly?: boolean;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id?: string;
  error?: FieldError | undefined;
  disabled?: boolean;
}

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

export interface IChildren {
  children: ReactNode;
}

export interface IUserContext {}

export interface IContactContext {
  favsIsVisible: boolean;
  setFavsIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  addContactIsVisible: boolean;
  setAddContactIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
