import React, { forwardRef, ForwardedRef } from "react";
import { IInputProps } from "@/types/types";

export const Select = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label className="p sm" htmlFor={id}>
          {label}
        </label>
        <select id={id} ref={ref} {...rest}>
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo">Primeiro módulo</option>
          <option value="Segundo módulo">Segundo módulo</option>
          <option value="Terceiro módulo">Terceiro módulo</option>
        </select>
        {/* {error ? <p className={styles.pError}>{error.message}</p> : null} */}
      </div>
    );
  }
);
