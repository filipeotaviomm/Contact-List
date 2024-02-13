import { forwardRef, ForwardedRef, useState } from "react";
import { Div } from "./styles";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { IInputProps } from "../../../types/types";

const InputPassword = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
      <Div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={isHidden ? "password" : "text"}
          readOnly={readOnly}
          ref={ref}
          {...rest}
        />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
        {error ? <p className="error">{error.message}</p> : null}
      </Div>
    );
  }
);

export { InputPassword };
