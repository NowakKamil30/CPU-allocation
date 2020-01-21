import React from 'react';

const Button = ({
    onClick,
    text,
    className,
    disabled}) => {
    return (
        <button 
        disabled={disabled}
        onClick={onClick} 
        className={className}>
        {text}
        </button>
    )
}
 
export default Button;