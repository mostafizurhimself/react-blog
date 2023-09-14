import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => {
  return (
    <input
      className={twMerge(
        'placeholder-dark-400 disabled:bg-dark-100 disabled:text-dark-500 inline-flex w-full items-center overflow-hidden rounded-full border border-transparent bg-white px-4 py-3 text-sm text-slate-800 shadow-lg outline-none focus:border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = 'Input';
export default Input;
