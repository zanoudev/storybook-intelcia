import React from 'react';
import './AvatarBadge.css';
export interface AvatarBadgeProps {
    status: 'approved' | 'denied';
    initials: string;
}
declare const AvatarBadge: React.FC<AvatarBadgeProps>;
export default AvatarBadge;
