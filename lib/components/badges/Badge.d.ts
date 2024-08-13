import React from 'react';
import './Badge.css';
export interface BadgeProps {
    rounded?: boolean;
    label: string;
    state?: 'gray' | 'success' | 'warning' | 'error' | 'primary';
    addLeftIcon?: boolean;
    addRightIcon?: boolean;
    addAvatar?: boolean;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
