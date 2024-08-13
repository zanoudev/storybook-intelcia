import React from 'react';
import './Snackbar.css';
import { CloseIcon, HelpCircleIcon } from '../CustomIcons';

export interface SnackbarProps {
  label: string;
  subtitle?: string;
  addSubtitle?: boolean;
  addUndo?: boolean;
  theme?: 'light' | 'dark';
}

const Snackbar: React.FC<SnackbarProps> = ({
  label,
  subtitle,
  addSubtitle,
  addUndo,
  theme,
}) => {

  return (
    <div className={`snackbar-container ${theme}`}>
      <div className='icon-text'>
        <div className='icon-container'>
          <HelpCircleIcon color='#98A2B3' />
        </div>
        <div className='text-content'>
          <label className='snackbar-label'>{label}</label>
          {addSubtitle && <p className='snackbar-subtitle'>{subtitle}</p>}
        </div>
        {addUndo && <p className='undo-text'>Undo</p>}
      </div>
      <div className='close-icon'>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Snackbar;
