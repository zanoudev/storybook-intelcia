import React, { useState } from 'react';
import './DarkToast.css';
import { CheckmarkIcon, CloseIcon, CopiedIcon, DownloadIcon, LoadIcon, PrinterIcon, NoConnectionIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface DarkToastProps {
  label: string;
  subtitle: string;
  addSubtitle?: boolean;
  addIcon?: boolean;
  addCloseIcon?: boolean;
  type?: 'copied' | 'exportation' | 'printer' | 'action done' | 'waiting' | 'no connection';
}

const DarkToast: React.FC<DarkToastProps> = ({
  label,
  subtitle,
  type,
  addSubtitle,
  addCloseIcon,
  addIcon,
}) => {

  const getIcon = () => {
    switch (type) {
      case 'copied':
        return <CopiedIcon color='#14142B' />;
      case 'exportation':
        return <DownloadIcon color='#14142B' />;
      case 'printer':
        return <PrinterIcon color='#14142B' />;
      case 'action done':
        return <CheckmarkIcon color='#14142B' />;
      case 'waiting':
        return <LoadIcon />;
        case 'no connection':
      return <NoConnectionIcon color='#14142B' />;
      default:
        return null;
    }
  };

  return (
    <div className={`dark-toast-container ${type}`}>
      <div className='icon-text'>
        <div className='icon-container'>
          {addIcon && getIcon()}
        </div>
        <div className='text-content'>
            <label className='dark-toast-label'>{label}</label>
            {addSubtitle && <p className='subtitle'>{subtitle}</p>}
        </div>
      </div>
        {addCloseIcon && <CloseIcon/>}
    </div>
  );
};

export default DarkToast;
