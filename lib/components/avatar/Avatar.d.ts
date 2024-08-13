import React from 'react';
import './Avatar.css';
export interface AvatarProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    background?: 'image' | 'icon' | 'initials';
    image?: string;
    initials?: string;
    focused?: boolean;
    onlineIndicator?: boolean;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
