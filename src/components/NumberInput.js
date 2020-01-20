import React from 'react';

const NumberInput = ({
    onChange, 
    label,
    className,
    value
}) => {
    return (             
    <label>
        <p>{label}</p>
            <input type="number"
            onChange = {onChange}
            className={className}
            value={value}
            />
    </label> 
    );
}
 
export default NumberInput;