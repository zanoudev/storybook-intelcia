import React, { useState } from 'react';
import './PageControl.css';

import { ChevronLeftIcon, ChevronRightIcon, ThreeDotsIcon } from '../CustomIcons'

export interface PageControlProps {
    style?: 'left' | 'right' | 'page-number' | 'overflow';
    number?: number;
    disabled?: boolean;
}

const PageControl: React.FC<PageControlProps> = ({ style, number=1, disabled }) => {
    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        if (style === 'page-number' && !disabled) {
            setPressed(!pressed);
        }
    };

    const renderIcon = () => {
        switch (style) {
            case 'left':
                return <ChevronLeftIcon />; // need to add color on hover
            case 'right':
                return <ChevronRightIcon />;
            case 'page-number':
                return <span>{number}</span>;
            case 'overflow':
                return <ThreeDotsIcon />;
            default:
                return null;
        }
    };

    return (
        <div className={`page-control ${style} ${pressed ? 'pressed' : ''} ${disabled? 'disabled' : ''}`}  onClick={handleClick}>
            {renderIcon()}
        </div>
    );
};

export default PageControl;