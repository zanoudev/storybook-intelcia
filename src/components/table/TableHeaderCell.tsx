import React from 'react';
import './TableHeaderCell.css';
import TableHeaderText from './TableHeaderText';
import CheckboxBase from '../checkbox/bases/CheckboxBase';

export interface TableHeaderCellProps {
    addCheckbox?: boolean;
    addText?: boolean;
    color?: 'white' | 'gray';
    label?: string;
    disabled?: boolean;
    helpIcon?: boolean;
    arrow?: 'none' | 'up' | 'down';
    width?: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({addCheckbox, addText, color, arrow, disabled, helpIcon, label, width}) => {

    return (
        <div className= {`table-header-cell ${addCheckbox? 'checkbox' : ''} ${addText? 'text' : ''} ${color}`} style={{ width }}>
            {addCheckbox && <CheckboxBase size='small'/>}
            {addText && <TableHeaderText arrow={arrow} helpIcon={helpIcon} label={label} disabled={disabled}/>}
        </div>
    );
};

export default TableHeaderCell;
