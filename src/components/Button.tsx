import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-primary-600 focus:ring-2 focus:ring-primary-300',
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
