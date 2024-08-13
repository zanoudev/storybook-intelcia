import React from 'react';
import './CheckCircleBase.css';
export interface CheckCircleBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: boolean;
    size?: 'small' | 'medium';
}
declare const CheckCircleBase: React.FC<CheckCircleBaseProps>;
export default CheckCircleBase;
