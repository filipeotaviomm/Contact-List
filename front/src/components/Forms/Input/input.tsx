import React, { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "@/types/types";
import { Div } from "./styles";

const Input = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Div>
        <label htmlFor={id}>{label}</label>
        <input
          readOnly={readOnly}
          className="p lg"
          id={id}
          ref={ref}
          {...rest}
        />
        {error ? <p>{error?.message}</p> : null}
      </Div>
    );
  }
);

export { Input };
