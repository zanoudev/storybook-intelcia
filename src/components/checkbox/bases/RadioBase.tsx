import React, { useState } from 'react';
import './RadioBase.css';

export interface RadioBaseProps {
  focused?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: 'small' | 'medium';
}

const RadioBase: React.FC<RadioBaseProps> = ({ 
    checked: initialChecked = false, focused, size, disabled
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const toggleRadio = () => {
    if (!disabled) {
      setChecked(prevChecked => !prevChecked);
    }
  };

  return (
    <div 
      className={`radio ${checked ? 'checked' : ''} ${size} ${focused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`} 
      onClick={toggleRadio}
    >
      <div className={`inner-circle ${checked ? 'checked' : ''} ${size} ${disabled ? 'disabled' : ''}`}></div>
    </div>
  );
};

export default RadioBase;
