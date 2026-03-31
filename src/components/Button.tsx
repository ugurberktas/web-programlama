import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary dark:bg-primary dark:hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary dark:bg-secondary dark:hover:bg-secondary/90',
    danger: 'bg-error text-white hover:bg-error/90 focus:ring-error dark:bg-error dark:hover:bg-error/90',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-500'
};

const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 py-3 text-base'
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className = '',
    variant = 'primary',
    size = 'md',
    disabled,
    children,
    ...props
}, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-gray-900';

    return (
        <button
            ref={ref}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export default Button;
