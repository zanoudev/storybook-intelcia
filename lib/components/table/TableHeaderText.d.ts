import React from 'react';
import './TableHeaderText.css';
export interface TableHeaderTextProps {
    label?: string;
    disabled?: boolean;
    helpIcon?: boolean;
    arrow?: 'none' | 'up' | 'down';
    width?: string;
}
declare const TableHeaderText: React.FC<TableHeaderTextProps>;
export default TableHeaderText;
