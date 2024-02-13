import { useEffect, useRef } from "react";
import { useUserContext } from "../../../hooks/useUserContext";
import { Div } from "./styles";

const MenuHeader = () => {
  const {
    logout,
    setIsMenuOpen,
    setIsUpdateUserModalOpen,
    setConfirmDeleteUser,
  } = useUserContext();

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
