import { forwardRef, ForwardedRef, useState } from "react";
import { Div } from "./styles";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { IInputProps } from "../../../types/types";
import { InputForm } from "../../../styles/InputStyles";

const InputPassword = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
      <Div>
        <label htmlFor={id}>Senha</label>
        <div>
          <InputForm
            id={id}
            type={isHidden ? "password" : "text"}
            readOnly={readOnly}
            ref={ref}
            {...rest}
          />
          <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>
        {error ? <p>{error.message}</p> : null}
      </Div>
    );
  }
);

export { InputPassword };
