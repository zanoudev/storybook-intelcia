import React, { useState } from 'react';
import './PageSelect.css';

import { ChevronUpIcon, ChevronDownIcon } from '../CustomIcons';

export interface PageSelectProps {
    pressed?: boolean;
    disabled?: boolean;
}

const PageSelect: React.FC<PageSelectProps> = ({ pressed: pressedProp, disabled }) => {
    const [pressed, setPressed] = useState(pressedProp || false);

    const togglePressed = () => {
        if (!disabled) {
            setPressed(!pressed);
        }
    };

    const handleItemClick = () => {
        if (!disabled) {
            setPressed(false);
        }
    };

    return (
        <div className={`page-select ${pressed ? 'pressed' : ''}`}>
            <div className={`target-select ${pressed ? 'pressed' : ''} ${disabled ? 'disabled' : ''}`} onClick={togglePressed}>
                <p>25</p>
                {pressed === false && <ChevronUpIcon />}
                {pressed === true && <ChevronDownIcon />}   
            </div>
            {pressed && (
                <div className={`list-select ${pressed ? 'pressed' : ''} ${disabled ? 'disabled' : ''}`}>
                    <p className='list-item' onClick={handleItemClick}>25</p>
                    <p className='list-item' onClick={handleItemClick}>50</p>
                    <p className='list-item' onClick={handleItemClick}>100</p>
                </div>
            )}
        </div>
    );
};

export default PageSelect;
