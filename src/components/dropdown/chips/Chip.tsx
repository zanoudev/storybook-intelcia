import React from 'react';
import './Chip.css';
// Import the Avatar component
import Avatar from '../../avatar/Avatar';
import { CloseIcon, CheckmarkIcon } from '../../CustomIcons';

export interface ChipProps {
  size?: 'sm' | 'md';
  state?: 'default' | 'disabled';
  addAvatar?: boolean;
  addIconRight?: boolean;
  addIconLeft?: boolean;
}

const Chip: React.FC<ChipProps> = ({ 
    size, state, addAvatar, addIconRight, addIconLeft,
}) => {
  // Ensure addIconLeft is false if addAvatar is true
  const showIconLeft = !addAvatar && addIconLeft;
  // Ensure addIconRight is false if showIconLeft is true
  const showIconRight = !showIconLeft && addIconRight;

  return (
    <div className={`chip-container ${size} ${state} ${addAvatar ? 'with-avatar': ''}`}>
      {addAvatar && <Avatar size={size} background='initials' />}
      {showIconLeft && <CheckmarkIcon />}
      <p className="chip-text">someone@example.com</p>
      { showIconRight && <CloseIcon />}
    </div>
  );
};

export default Chip;
