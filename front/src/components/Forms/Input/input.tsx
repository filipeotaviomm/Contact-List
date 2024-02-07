import { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "../../../types/types";
import { Div } from "./styles";
import { InputForm } from "../../../styles/InputStyles";

const Input = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Div>
        <label htmlFor={id}>{label}</label>
        <InputForm
          readOnly={readOnly}
          className="p lg"
          id={id}
          ref={ref}
          {...rest}
        />
        {error ? <p className="error">{error.message}</p> : null}
      </Div>
    );
  }
);

export { Input };
