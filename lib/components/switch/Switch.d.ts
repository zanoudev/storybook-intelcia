import React from 'react';
import './Switch.css';
export interface SwitchProps {
    size?: 'small' | 'medium';
    checked: boolean;
    onChange: () => void;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
