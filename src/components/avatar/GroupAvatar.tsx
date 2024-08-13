import React from 'react';
import './GroupAvatar.css';

export interface GroupAvatarProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md';
  groupCount?: 1 | 2 | 3 | 4;
  otherAvatars?: string;
  colors?: string[]; // Use an array of colors to display multiple avatars
}

const GroupAvatar: React.FC<GroupAvatarProps> = ({
  size = 'md',
  groupCount = 4,
  otherAvatars = '+5',
  colors = ['#F9BED7', '#F598C1', '#F173A9', '#EA287C'] // Default colors for demonstration
}) => {
  const avatarsToShow = colors.slice(0, groupCount);

  return (
    <div className={`group-avatar-container ${size}`}>
      {avatarsToShow.map((color, index) => (
        <div key={index} className="avatar" style={{ backgroundColor: color }}></div>
      ))}
      {groupCount < colors.length && (
        <div className="avatar group-overlay">
          <span>{otherAvatars}</span>
        </div>
      )}
    </div>
  );
};

export default GroupAvatar;
