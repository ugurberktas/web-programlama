import React, { useState } from 'react';

const variants = {
    info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50',
    success: 'bg-success/10 text-success border-success/20 dark:bg-success/10 dark:text-success dark:border-success/20',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800/50',
    error: 'bg-error/10 text-error border-error/20 dark:bg-error/10 dark:text-error dark:border-error/20'
};

export const Alert = React.forwardRef(({
    className = '',
    variant = 'info',
    dismissible = false,
    onDismiss,
    children,
    ...props
}, ref) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) onDismiss();
    };

    const baseStyles = 'w-full rounded-lg border p-4 text-sm relative';
    const dismissibleStyles = dismissible ? 'pr-11' : '';

    return (
        <div
            ref={ref}
            role="alert"
            className={`${baseStyles} ${variants[variant]} ${dismissibleStyles} ${className}`}
            {...props}
        >
            <div>{children}</div>
            {dismissible && (
                <button
                    type="button"
                    onClick={handleDismiss}
                    className="absolute right-3 top-3.5 inline-flex h-6 w-6 items-center justify-center rounded-md opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current transition-opacity text-current"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
        </div>
    );
});

Alert.displayName = 'Alert';
export default Alert;
