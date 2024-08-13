import React, { useState } from 'react';
import './Badge.css';
import { CloseIcon, CheckmarkIcon, InfoIcon, WarningIcon, ErrorIcon, ClockIcon, CrownIcon } from '../CustomIcons'; // Update the import to include all necessary icons
import Avatar from '../avatar/Avatar'; // Update the import to include the Avatar component

export interface BadgeProps {
    rounded?: boolean;
    label: string;
    state?: 'gray' | 'success' | 'warning' | 'error' | 'primary';
    addLeftIcon?: boolean;
    addRightIcon?: boolean;
    addAvatar?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
    rounded,
    label="Label",
    state,
    addLeftIcon,
    addRightIcon,
    addAvatar,
    }) => {

  const getIcon = () => {
    switch (state) {
      case 'gray':
        return <ClockIcon color='#98A2B3' width='16' height='16' />;
      case 'success':
        return <CheckmarkIcon color='#12B76A' width='16' height='16' />;
      case 'warning':
        return <WarningIcon color='#FDB022' width='16' height='16' />;
      case 'error':
        return <ErrorIcon color='#F97066' width='16' height='16' />;
      case 'primary':
        return <CrownIcon color='#F173A9' width='16' height='16' />;
      default:
        return null;
    }
  };

  const getStateColor = () => {
    switch (state) {
      case 'gray':
        return '#98A2B3';
      case 'success':
        return '#12B76A';
      case 'warning':
        return '#FDB022';
      case 'error':
        return '#F97066';
      case 'primary':
        return '#F173A9';
      default:
        return '#98A2B3';
    }
  }


  return (
    <div className={`badge-container ${state} ${rounded ? 'rounded' : ''}`}>
      <div className='badge-icon-text'>
        <div className='badge-icon-container'>
            {addAvatar && <Avatar size='xxs' background='initials' /> }
            {addLeftIcon && getIcon()}
        </div>
        <label className='badge-label'>{label}</label>
      </div>
        {addRightIcon && <CloseIcon color={getStateColor()} width="14" height='14'/>}
    </div>
  );
};

export default Badge;