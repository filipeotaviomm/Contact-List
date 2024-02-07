import { useNavigate } from "react-router-dom";
import { IRegisterFormValues } from "../components/Forms/RegisterForm/registerFormSchema";
import { api } from "../services/api";
import { IChildren, IUserContext } from "../types/types";
import { createContext } from "react";
import { toast } from "react-toastify";
import { ILoginFormValues } from "../components/Forms/LoginForm/loginFormSchema";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const userRegister = async (
    formData: IRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 1200);
      reset();
    } catch (error: any) {
      if (error.response?.status === 409) {
        console.log(error);
        toast.error("E-mail já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (
    formData: ILoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@contact-liszt:token", token);
      navigate("/dashboard");
      reset();
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 401) {
        toast.error("E-mail ou senha incorreta");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
