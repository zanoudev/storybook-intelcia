import React from 'react';
import './ValueBadge.css';
export interface ValueBadgeProps {
    value: string;
    iconPosition?: 'left' | 'right';
    iconDirection?: 'up' | 'down';
    theme?: 'positive' | 'negative' | 'neutral';
}
declare const ValueBadge: React.FC<ValueBadgeProps>;
export default ValueBadge;
