import React from 'react';
import './GroupAvatar.css';
export interface GroupAvatarProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md';
    groupCount?: 1 | 2 | 3 | 4;
    otherAvatars?: string;
    colors?: string[];
}
declare const GroupAvatar: React.FC<GroupAvatarProps>;
export default GroupAvatar;
