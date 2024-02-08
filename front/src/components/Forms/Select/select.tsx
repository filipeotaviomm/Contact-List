import { forwardRef, ForwardedRef } from "react";
import { ISelectProps } from "../../../types/types";
import { Div } from "./styles";
import { SelectForm } from "../../../styles/InputStyles";

export const Select = forwardRef(
  (
    { label, id, error, disabled, ...rest }: ISelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <Div>
        <label htmlFor={id}>{label}</label>
        <SelectForm
          defaultValue="standard"
          disabled={disabled}
          id={id}
          ref={ref}
          {...rest}
        >
          <option value="standard">Padrão</option>
          <option value="family">Família</option>
          <option value="friends">Amigos</option>
          <option value="work">Trabalho</option>
          <option value="school">Escola</option>
        </SelectForm>
        {error ? <p className="error">{error.message}</p> : null}
      </Div>
    );
  }
);
