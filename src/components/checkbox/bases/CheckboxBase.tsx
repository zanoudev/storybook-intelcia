import React, { useState } from 'react';
import './CheckboxBase.css';
import { CheckmarkIcon, MinusIcon } from '../../CustomIcons'; //src\stories\CustomIcons.tsx

export interface CheckboxBaseProps {
  focused?: boolean;
  disabled?: boolean;
  checked?: 'unchecked' | 'checked' | 'indeterminate';
  size?: 'small' | 'medium';
}

const CheckboxBase: React.FC<CheckboxBaseProps> = ({ 
    checked: initialChecked = 'unchecked', focused, size, disabled
}) => {
  const [checked, setChecked] = useState<'unchecked' | 'checked' | 'indeterminate'>(initialChecked);

  const toggleCheckbox = () => {
    setChecked(prevChecked => (prevChecked === 'unchecked' ? 'checked' : 'unchecked'));
  };

  return (
    <div className={`checkbox ${checked} ${size} ${focused ? 'focused' : ''} ${disabled ? 'disabled' : ''}`} onClick={toggleCheckbox}>
      {checked === 'checked' && <CheckmarkIcon color="#EA287C" width="12" height="12" />}
      {checked === 'indeterminate' && <MinusIcon color="#EA287C" width="12" height="12" />}
    </div>
  );
};

export default CheckboxBase;
