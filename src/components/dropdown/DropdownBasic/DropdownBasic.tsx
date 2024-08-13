import React, { useState } from 'react';
import './DropdownBasic.css';
import { ChevronDownIcon, UserIcon } from '../../CustomIcons';

export interface DropdownBasicProps {
  label: string;
  placeholder: string;
  hint?: string; // hint is used as message underneath the error input
  state?: 'default' | 'disabled' | 'error';
  addLeftIcon?: boolean; // if true, add left icon
  leftIcon?: string; // url for icon, icon is hardcoded for now
  width?: string;
}

const DropdownBasic: React.FC<DropdownBasicProps> = ({
  label,
  placeholder,
  state = 'default',
  addLeftIcon,
  hint,
  width,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`dropdown-container ${state}`} style={{ width }}>
      <label>{label}</label>
      <div className={`box-container ${state} ${isActive ? 'active' : 'default'}`} onClick={handleClick}>
        {addLeftIcon && <UserIcon />}
        <div className={`placeholder ${state}`}>{placeholder}</div>
        <ChevronDownIcon />
      </div>
      {hint && <p className="hint">{hint}</p>}
    </div>
  );
};

export default DropdownBasic;
