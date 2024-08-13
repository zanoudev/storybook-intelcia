import React from 'react';
import './ColorToast.css';
export interface ColorToastProps {
    label: string;
    addSubtitle?: boolean;
    addIcon?: boolean;
    addCloseIcon?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
}
declare const ColorToast: React.FC<ColorToastProps>;
export default ColorToast;
