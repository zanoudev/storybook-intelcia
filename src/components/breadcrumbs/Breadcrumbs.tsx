import React from 'react';
import './Breadcrumbs.css';
import { HomeFilledIcon, SlashDividerIcon, ChevronRightIcon, ThreeDotsIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface BreadcrumbsProps {
    divider?: 'slash' | 'chevron';
    level?: 1 | 2;
    label?: string;
    current?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ divider, level=1, label="Settings", current="Team" }) => {

    const getDivider = () => {
        if (divider === 'slash') {
            return <SlashDividerIcon />;
        } else if (divider === 'chevron') {
            return <ChevronRightIcon />;
        } else {
            return null;
        }
    };

    return (
        <div className= "breadcrumbs">
            <HomeFilledIcon/>
            {getDivider()}
            <p>{label}</p>
            {level === 2 && 
            (<>
                {getDivider()}
                <ThreeDotsIcon/>
            </>)}

            {getDivider()}
            <p className='current'>{current}</p>
        </div>
    );
};

export default Breadcrumbs;
