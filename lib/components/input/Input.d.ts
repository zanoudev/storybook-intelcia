import React from 'react';
import './Input.css';
export interface InputProps {
    label: string;
    placeholder: string;
    state?: 'default' | 'disabled' | 'error';
    hint?: string;
    leftIcon?: string;
    addLeftIcon?: boolean;
    rightIcon?: string;
    addRightIcon?: boolean;
    width?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
