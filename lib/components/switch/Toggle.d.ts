import { FC } from 'react';
import './Toggle.css';
export interface ToggleProps {
    label: string;
    supportingText?: string;
    disabled?: boolean;
    focused?: boolean;
    addLabel?: boolean;
    addSupportingText?: boolean;
}
declare const Toggle: FC<ToggleProps>;
export default Toggle;
