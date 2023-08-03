'use client';

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

// Here used type not interface becauce here I want to extend this type not just implement it
type FormSubmitButtonProps = {
  children: React.ReactNode,
  className?: string,
} & ComponentProps<"button">

const FormSubmitButton = ({children, className, ...props}: FormSubmitButtonProps) => {
  const {pending} = useFormStatus();
  return (
    <button {...props} type='submit' className={`btn btn-primary ${className}`} disabled={pending}>
      {pending && <span className="loading loading-dots"/>}
      {children}
    </button>
  )
}

export default FormSubmitButton;
