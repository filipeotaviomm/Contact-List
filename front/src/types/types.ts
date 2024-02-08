import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IRegisterFormValues } from "../components/Forms/RegisterForm/registerFormSchema";
import { ILoginFormValues } from "../components/Forms/LoginForm/loginFormSchema";

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

export interface IUser {
  id: string;
  avatar: string | null;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface IUserContext {
  userRegister: (
    formData: IRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  userLogin: (
    formData: ILoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  user: IUser;

  isUserLogged: boolean;
}

//não estou usando até agora
// export interface IUserRegisterProps {
//   formData: IRegisterFormValues;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   reset: () => void;
// }

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  createdAt: string;
  userId: string;
}

export interface IContactContext {
  favsIsVisible: boolean;
  setFavsIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  addContactIsVisible: boolean;
  setAddContactIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;

  contactsList: IContact[] | [];
  setContactsList: React.Dispatch<React.SetStateAction<[] | IContact[]>>;
}
