import React from 'react';
import './Tooltip.css';

export interface TooltipProps {
    text: string;
    addSupportText?: boolean,
    supportText?: string;
    arrow?: 'none' | 'top-center' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
    theme?: 'light' | 'dark';
}

const Tooltip: React.FC<TooltipProps> = ({ text, addSupportText, supportText, arrow, theme }) => {
    return (
        <div className='tooltip-frame'>
            <div className={`tooltip-container ${theme}`}>
                <div className={`tooltip-text`}>{text}</div>
                {addSupportText && <div className={`tooltip-support-text`}>{supportText}</div>}
            </div>
            <div className={`tooltip-arrow ${theme} ${arrow}`}></div>
        </div>
    );
};

export default Tooltip;