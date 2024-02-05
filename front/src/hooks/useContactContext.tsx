import { useContext } from "react";
import { ContactContext } from "../providers/ContactContext";

export const useContactContext = () => {
  const authContext = useContext(ContactContext);
  return authContext;
};
