import React from 'react';
import './TableHeaderCell.css';
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
declare const TableHeaderCell: React.FC<TableHeaderCellProps>;
export default TableHeaderCell;
