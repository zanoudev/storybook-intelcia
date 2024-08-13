// Switch.tsx
import React from 'react';
import './Switch.css';

export interface SwitchProps {
  size?: 'small' | 'medium';
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, size="medium", onChange }) => {
  return (
    <label className= {`switch ${checked ? 'checked' : ''} ${size}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={`slider ${checked ? 'checked' : ''} ${size}`}></span>
    </label>
  );
};


export default Switch;
