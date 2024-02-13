import { useNavigate } from "react-router-dom";
import { IRegisterFormValues } from "../components/Forms/RegisterForm/registerFormSchema";
import { api } from "../services/api";
import { IChildren, IUser, IUserContext } from "../types/types";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ILoginFormValues } from "../components/Forms/LoginForm/loginFormSchema";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] =
    useState<boolean>(false);
  const [confirmDeleteUser, setConfirmDeleteUser] = useState<boolean>(false);

  const token: string | null = localStorage.getItem("@contact-liszt:token");
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
      // setTimeout(() => {
      navigate("/");
      // }, 1200);
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
      localStorage.setItem("@contact-liszt:token", token);
      setIsUserLogged(true);
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

  useEffect(() => {
    const getUserbyId = async () => {
      const token: string | null = localStorage.getItem("@contact-liszt:token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await api.get(`/users/${decoded.sub}`);
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUserbyId();
  }, [isUserLogged]);

  // revisar sobre o e-mail e os tipos
  const updateUser = async (
    formData: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (token) {
      try {
        setLoading(true);
        const decoded = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.patch(`/users/${decoded.sub}`, formData);
        const newUser = { ...response.data, ...formData };
        setUser(newUser);
        setIsUpdateUserModalOpen(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteUser = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (token) {
      try {
        setLoading(true);
        const decoded = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await api.delete(`/users/${decoded.sub}`);
        localStorage.removeItem("@contact-liszt:token");
        navigate("/");
        setConfirmDeleteUser(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@contact-liszt:token");
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        isUserLogged,
        isMenuOpen,
        setIsMenuOpen,
        logout,
        isUpdateUserModalOpen,
        setIsUpdateUserModalOpen,
        updateUser,
        deleteUser,
        confirmDeleteUser,
        setConfirmDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
