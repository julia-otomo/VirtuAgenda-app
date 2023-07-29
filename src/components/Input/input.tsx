import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface iInputProps {
  type: string;
  id: string;
  title: string;
  errorMessage?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, id, title, errorMessage, ...rest }, ref) => (
    <fieldset className="flex flex-col items-center gap-2">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} ref={ref} {...rest} />
      {errorMessage ? <span>{errorMessage.message}</span> : null}
    </fieldset>
  )
);
