import React from 'react';
import './Button.css';
import { LeftArrowCircleIcon, RightArrowCircleIcon } from '../CustomIcons';

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

const Button: React.FC<ButtonProps> = ({
    type = 'primary', 
    size = 'medium', 
    backgroundColor, 
    label, 
    icon,
    onClick,
    disabled = false, 
    width,
    }) => {
    const mode = `storybook-button--${type}`;
    const disable = disabled ? 'storybook-button--disabled' : '';
    const iconColor = disabled ? '#F7F7FC' : type === 'primary' ? '#FFFFFF' : type === 'secondary' ? '#EA287C' : '#475467';

    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ') + [disable].join(' ')}
            disabled={disabled}
            style={{ backgroundColor, width }}
            onClick={onClick}
        >
            <div className='button-content'>
                {icon === 'left' && <LeftArrowCircleIcon color={iconColor}/>}
                {label}
                {icon === 'right' && <RightArrowCircleIcon color={iconColor}/>}
            </div>
        </button>
    );
};

export default Button;
