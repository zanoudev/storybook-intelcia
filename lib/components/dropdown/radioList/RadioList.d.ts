import React from 'react';
import './RadioList.css';
export interface RadioListProps {
    state?: 'default' | 'error';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const RadioList: React.FC<RadioListProps>;
export default RadioList;
