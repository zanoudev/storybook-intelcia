import React from 'react';
import './Tooltip.css';
export interface TooltipProps {
    text: string;
    addSupportText?: boolean;
    supportText?: string;
    arrow?: 'none' | 'top-center' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
    theme?: 'light' | 'dark';
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
