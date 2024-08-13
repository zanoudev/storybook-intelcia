import React from 'react';
import './CheckboxBase.css';
export interface CheckboxBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: 'unchecked' | 'checked' | 'indeterminate';
    size?: 'small' | 'medium';
}
declare const CheckboxBase: React.FC<CheckboxBaseProps>;
export default CheckboxBase;
