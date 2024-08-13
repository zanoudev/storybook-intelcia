import React from 'react';
import './Button.css';
export interface ButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    icon: 'left' | 'right' | 'none';
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
