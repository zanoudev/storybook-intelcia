import { FC } from 'react';
import './Checkbox.css';
export interface CheckboxProps {
    label: string;
    supportingText?: string;
    disabled?: boolean;
    focused?: boolean;
    checked?: boolean;
    addLabel?: boolean;
    addSupportingText?: boolean;
    type?: 'radio' | 'checkbox';
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
