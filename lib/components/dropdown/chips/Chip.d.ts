import React from 'react';
import './Chip.css';
export interface ChipProps {
    size?: 'sm' | 'md';
    state?: 'default' | 'disabled';
    addAvatar?: boolean;
    addIconRight?: boolean;
    addIconLeft?: boolean;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
