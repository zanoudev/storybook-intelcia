import React from 'react';
import './OptionList.css';
export interface OptionListProps {
    state?: 'default' | 'disabled';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addRightIcon?: boolean;
    addLeftIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const OptionList: React.FC<OptionListProps>;
export default OptionList;
