import React from 'react';
import './CheckboxList.css';
export interface CheckboxListProps {
    state?: 'default' | 'error';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const CheckboxList: React.FC<CheckboxListProps>;
export default CheckboxList;
