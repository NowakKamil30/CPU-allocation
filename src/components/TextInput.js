import React from 'react';

const TextInput = ({
    onChange, 
    placeholder,
    label,
    className,
    value
}) => {
    return (             
    <label>
        <p>{label}</p>
            <input type="text"
            placeholder={placeholder}
            onChange = {onChange}
            className={className}
            value={value}
            />
    </label> 
    );
}
 
export default TextInput;