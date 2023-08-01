import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface iInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  title: string;
  errorMessage?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, id, title, errorMessage, ...rest }, ref) => (
    <fieldset className="flex flex-col  gap-3 w-full">
      <label htmlFor={id} className="text-stone-800">
        {title}
      </label>
      <input
        type={type}
        id={id}
        ref={ref}
        {...rest}
        className=" w-full rounded-sm outline-none py-1 px-4 border-box text-stone-800 border-2 border-transparent focus:border-2 focus:border-lime-800"
      />
      {errorMessage ? (
        <span className="text-sm text-red-800 ">{errorMessage.message}</span>
      ) : null}
    </fieldset>
  )
);
