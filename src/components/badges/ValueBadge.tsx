import React, { useState } from 'react';
import './ValueBadge.css';
import { UpArrowIcon, DownArrowIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface ValueBadgeProps {
    value: string;
    iconPosition?: 'left' | 'right';
    iconDirection?: 'up' | 'down';
    theme?: 'positive' | 'negative' | 'neutral';
}

const ValueBadge: React.FC<ValueBadgeProps> = ({
    value,
    iconPosition,
    iconDirection,
    theme,
    }) => {

  const getThemeColor = () => {
    switch (theme) {
      case 'positive':
        return '#12B76A';
      case 'negative':
        return '#F97066';
      case 'neutral':
        return '#98A2B3';
      default:
        return '#98A2B3';
    }
  }

  
  const getIcon = () => {
    const color = getThemeColor();
    switch (iconDirection) {
      case 'up':
        return <UpArrowIcon color={color} />; // Update the color to match the theme
      case 'down':
        return <DownArrowIcon color={color} />; // Update the color to match the theme
      default:
        return null;
    }
  };

  return (
    <div className={`value-badge-container ${theme}`}>
        {iconPosition === 'left' && getIcon()}
        <div className='value-badge'>{value}</div>
        {iconPosition === 'right' && getIcon()}
    </div>
  );
}

export default ValueBadge;