import React from 'react';
import './Button.css';

//function to check the value if it is an operator 
//we use the function isNaN: Returns a Boolean value 
//that indicates whether a value is the reserved value NaN (not a number).
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
    <div 
    className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"
        }`} 
    >
    {props.children}
</div>
);

export default Button;