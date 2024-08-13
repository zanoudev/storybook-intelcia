import React from 'react';
import './DropdownBasic.css';
export interface DropdownBasicProps {
    label: string;
    placeholder: string;
    hint?: string;
    state?: 'default' | 'disabled' | 'error';
    addLeftIcon?: boolean;
    leftIcon?: string;
    width?: string;
}
declare const DropdownBasic: React.FC<DropdownBasicProps>;
export default DropdownBasic;
