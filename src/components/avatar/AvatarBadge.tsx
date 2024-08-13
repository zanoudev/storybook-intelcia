import React from 'react';
import './AvatarBadge.css';
import {CheckmarkIcon, CloseIcon} from '../CustomIcons';

export interface AvatarBadgeProps {
  status: 'approved' | 'denied';
  initials: string;
}

const AvatarBadge: React.FC<AvatarBadgeProps> = ({ status, initials }) => {
  return (
    <div className="avatar-badge-container">
      <div className={`avatar-badge ${status}`}>
        <span className="initials">{initials}</span>
      </div>
      <div className={`status-badge ${status}`}>
        {status === 'approved' ? (
          <CheckmarkIcon color='#38C976' width='12' height='12' viewBox='0 0 12 12' /> // check mark
        ) : (
          <CloseIcon color='#FE4646' width='12' height='12' viewBox='0 0 12 12'/> // cross mark
        )}
      </div>
    </div>
  );
};

export default AvatarBadge;
