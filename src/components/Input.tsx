import React, { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helpText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    className = '',
    id,
    label,
    error,
    helpText,
    ...props
}, ref) => {
    const internalId = useId();
    const inputId = id || internalId;
    const errorId = `${inputId}-error`;
    const helpTextId = `${inputId}-help`;

    const baseStyles = 'flex w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-offset-gray-900 transition-colors bg-white';

    const errorStyles = error
        ? 'border-error focus:border-error focus:ring-error/50'
        : 'border-gray-300 focus:border-primary focus:ring-primary/50 dark:border-gray-700';

    return (
        <div className="w-full flex flex-col gap-1.5">
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                ref={ref}
                aria-invalid={!!error}
                aria-describedby={`${error ? errorId : ''} ${helpText && !error ? helpTextId : ''}`.trim() || undefined}
                className={`${baseStyles} ${errorStyles} ${className}`}
                {...props}
            />
            {error && (
                <p id={errorId} role="alert" className="text-sm font-medium text-error flex items-center gap-1">
                    {error}
                </p>
            )}
            {helpText && !error && (
                <p id={helpTextId} className="text-sm text-gray-500 dark:text-gray-400">
                    {helpText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';
export default Input;
