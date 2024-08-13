import React, { useState } from 'react';
import './Tab.css';

import { InfoIcon } from '../CustomIcons'


export interface TabProps {
    name?: string;
    addOn?: 'badge' | 'icon' | 'none';
    rounded?: boolean,
    disabled?: boolean,
}

const Tab: React.FC<TabProps> = ({ name="Tab Name", addOn='none', rounded, disabled }) => {
    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
        if (!disabled) {
            setPressed(!pressed);
        }
    };

    return (
        <div className={`tab ${pressed ? 'pressed' : ''} ${rounded ? 'rounded' : ''} ${disabled? 'disabled' : ''}`}
        onClick={handleClick}>
            <p>{name}</p>
            {addOn === 'icon' && <InfoIcon/>}
            {addOn === 'badge' && <p className='badge'>+99</p>}
        </div>
    );
};

export default Tab;