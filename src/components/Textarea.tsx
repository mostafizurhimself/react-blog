import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...rest }, ref) => {
  return (
    <textarea
      className={twMerge(
        'inline-flex w-full overflow-hidden rounded-2xl border border-slate-200 border-transparent bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-lg outline-none focus:border-primary-500  focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
