import React, { useState } from 'react';
import './ColorToast.css';
import { CheckmarkIcon, CloseIcon, InfoIcon, WarningIcon, ErrorIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface ColorToastProps {
  label: string;
  addSubtitle?: boolean;
  addIcon?: boolean;
  addCloseIcon?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const ColorToast: React.FC<ColorToastProps> = ({
  label,
  type,
  addSubtitle,
  addCloseIcon,
  addIcon,
}) => {

  const getIcon = () => {
    switch (type) {
      case 'info':
        return <InfoIcon color='#98A2B3' />;
      case 'success':
        return <CheckmarkIcon color='#12B76A' />;
      case 'warning':
        return <WarningIcon color='#F79009' />;
      case 'error':
        return <ErrorIcon color='#F04438' />;
      default:
        return null;
    }
  };

  return (
    <div className={`color-toast-container ${type}`}>
      <div className='icon-text'>
        <div className='icon-container'>
          {addIcon && getIcon()}
        </div>
        <div className='text-content'>
            <label className='color-toast-label'>{label}</label>
            {addSubtitle && <p className='subtitle'>Second line</p>}
        </div>
      </div>
        {addCloseIcon && <CloseIcon/>}
    </div>
  );
};

export default ColorToast;
