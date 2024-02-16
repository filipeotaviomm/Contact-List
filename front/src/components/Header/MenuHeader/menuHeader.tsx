import { useEffect, useRef } from "react";
import { useUserContext } from "../../../hooks/useUserContext";
import { Div } from "./styles";
import { useContactContext } from "../../../hooks/useContactContext";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../types/types";

const MenuHeader = () => {
  const {
    setIsMenuOpen,
    setIsUpdateUserModalOpen,
    setConfirmDeleteUser,
    setUser,
  } = useUserContext();
  const { setContactsList } = useContactContext();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@contact-liszt:token");
    navigate("/");
    setIsMenuOpen(false);
    setUser({} as IUser);
    setContactsList([]);
  };

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleInClick = (e: MouseEvent) => {
      setTimeout(() => {
        if (boxRef.current?.contains(e.target as Node)) {
          setIsMenuOpen(false);
        }
      }, 100);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    window.addEventListener("mousedown", handleInClick);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
      window.removeEventListener("mousedown", handleInClick);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Div ref={boxRef}>
      <button onClick={() => setIsUpdateUserModalOpen(true)}>
        Atualizar seus dados
      </button>
      <button onClick={() => setConfirmDeleteUser(true)}>
        Deletar sua conta
      </button>
      <button onClick={logout}>Sair</button>
    </Div>
  );
};

export default MenuHeader;
