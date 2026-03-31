import React from 'react';
import type { HTMLAttributes } from 'react';

const variants = {
    elevated: 'bg-white dark:bg-gray-800 shadow-md',
    outlined: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    filled: 'bg-gray-50 dark:bg-gray-800/50'
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof variants;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
    className = '',
    variant = 'elevated',
    children,
    ...props
}, ref) => {
    const baseStyles = 'rounded-lg text-gray-900 dark:text-gray-100 overflow-hidden';

    return (
        <div
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
export default Card;
