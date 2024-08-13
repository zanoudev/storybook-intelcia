import React from 'react';
import './TableHeaderText.css';
import { HelpCircleIcon, UpArrowIcon, DownArrowIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface TableHeaderTextProps {
    label?: string;
    disabled?: boolean;
    helpIcon?: boolean;
    arrow?: 'none' | 'up' | 'down';
    width?: string;

}

const TableHeaderText: React.FC<TableHeaderTextProps> = ({ label='Company', helpIcon, arrow='none', disabled, width}) => {

    return (
        <div className= {`table-header ${disabled? 'disabled' : ''}`} style={{ width }}>
            <p>{label}</p>
            {helpIcon && <HelpCircleIcon/>}
            {arrow === 'up' && <UpArrowIcon/>}
            {arrow === 'down' && <DownArrowIcon/>}
        </div>
    );
};

export default TableHeaderText;
