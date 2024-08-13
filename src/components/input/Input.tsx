import React from 'react';
import './Input.css';
import { EmailIcon, HelpCircleIcon } from '../CustomIcons';
//import svg from 'public/public-assets/user-icon.svg';

export interface InputProps {
  label: string;
  placeholder: string;
  state?: 'default' | 'disabled' | 'error' ;
  hint?: string; // hint is used as message underneath the error input
  leftIcon?: string; // url for icon
  addLeftIcon?: boolean; // if true, add left icon
  rightIcon?: string; // url for icon
  addRightIcon?: boolean; // if true, add right icon
  width?: string;
}

const Input: React.FC<InputProps> = ({ 
    label, placeholder, state = 'default', addLeftIcon, addRightIcon, hint, width = '320px', // default width
}) => {
  return (
    <div className={`input-container ${state}`} style={{ width }}>
      <label>{label}</label>
      <div className={`box-container ${state}`}>
        {addLeftIcon && <EmailIcon/>}
        <input placeholder={placeholder} />
        {addRightIcon && <HelpCircleIcon/>}
      </div>
      {hint && <p className="hint">{hint}</p>}
    </div>
  );
};

export default Input;
