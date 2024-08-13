import React, { useState } from 'react';
import './CheckCircleBase.css';
import { CheckmarkIcon, MinusIcon } from '../../CustomIcons'; //src\stories\CustomIcons.tsx

export interface CheckCircleBaseProps {
  focused?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: 'small' | 'medium';
}

const CheckCircleBase: React.FC<CheckCircleBaseProps> = ({ 
    checked: initialChecked = false, focused, size, disabled
}) => {
    const [checked, setChecked] = useState(initialChecked);

    const toggleRadio = () => {
      if (!disabled) {
        setChecked(prevChecked => !prevChecked);
      }
    };

  return (
    <div className={`checkcircle ${checked? 'checked':''} ${size} ${focused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`} onClick={toggleRadio}>
      {checked && <CheckmarkIcon color="#FFFFFF" width="12" height="12" />}
    </div>
  );
};

export default CheckCircleBase;