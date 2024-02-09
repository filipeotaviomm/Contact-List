import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IRegisterFormValues } from "../components/Forms/RegisterForm/registerFormSchema";
import { ILoginFormValues } from "../components/Forms/LoginForm/loginFormSchema";
import { ICreateContactFormValues } from "../components/Forms/CreateContactForm/createContactFormSchema";

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

  CreateContactModalIsVisible: boolean;
  setCreateContactModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  loading: boolean;

  contactsList: IContact[] | [];
  setContactsList: React.Dispatch<React.SetStateAction<[] | IContact[]>>;

  createContact: (
    formData: ICreateContactFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  contactsResult: IContact[] | [];

  bringBackAllContacts: () => void;

  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
