import React from 'react';
import './RadioBase.css';
export interface RadioBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: boolean;
    size?: 'small' | 'medium';
}
declare const RadioBase: React.FC<RadioBaseProps>;
export default RadioBase;
