// Avatar.tsx

import React from 'react';
import './Avatar.css';
import { UserIcon } from '../CustomIcons';
// import Image from '../../Image';
const profilePicture = 'src/stories/assets/portrait-man.jpg'

export interface AvatarProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  background?: 'image' | 'icon' | 'initials';
  image?: string;
  initials?: string;
  focused?: boolean;
  onlineIndicator?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  size,
  background,
  image,
  initials,
  focused,
  onlineIndicator,
}) => {
  let content;
  let imageSrc = image || profilePicture;

  switch (background) {
    case 'image':
      // content = <Image src = {imageSrc} />;
      break;
    case 'icon':
      content = <UserIcon />;
      break;
    case 'initials':
      content = <span className="avatar-initials">{initials || 'JD'}</span>;
      break;
    default:
      content = null;
  }

  return (
    <div
      className={`avatar-container ${size} 
                  ${focused ? 'focused' : ''} 
                  ${onlineIndicator ? 'online-indicator' : ''} 
                  ${background} `}>
      {content}
    </div>
  );
};

export default Avatar;
