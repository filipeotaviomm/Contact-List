import { forwardRef, ForwardedRef } from "react";
import { ISelectProps } from "../../../types/types";
import { Div } from "./styles";

export const Select = forwardRef(
  (
    { label, id, error, disabled, ...rest }: ISelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <Div>
        <label htmlFor={id}>{label}</label>
        <select disabled={disabled} id={id} ref={ref} {...rest}>
          <option value="standard">Padrão</option>
          <option value="family">Família</option>
          <option value="friends">Amigos</option>
          <option value="work">Trabalho</option>
          <option value="school">Escola</option>
        </select>
        {/* {error ? <p className={styles.pError}>{error.message}</p> : null} */}
      </Div>
    );
  }
);
