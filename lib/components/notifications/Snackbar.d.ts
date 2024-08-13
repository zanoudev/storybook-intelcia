import React from 'react';
import './Snackbar.css';
export interface SnackbarProps {
    label: string;
    subtitle?: string;
    addSubtitle?: boolean;
    addUndo?: boolean;
    theme?: 'light' | 'dark';
}
declare const Snackbar: React.FC<SnackbarProps>;
export default Snackbar;
