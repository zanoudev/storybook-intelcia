import React from 'react';
import './TableCell.css';
export interface TableCellProps {
    style?: 'lead-text' | 'lead-checkbox' | 'lead-radio' | 'lead-toggle' | 'lead-avatar' | 'avatar-group' | 'lead-avatar-checkbox' | 'lead-avatar-radio' | 'lead-avatar-toggle' | 'badge' | 'badge-multiple' | 'trend' | 'action-icon' | 'progress-bar' | 'payment-method' | 'star-ratings';
    label?: string;
    addSupportingText: boolean;
    supportingText?: string;
    disabled?: boolean;
    width?: string;
}
declare const TableCell: React.FC<TableCellProps>;
export default TableCell;
