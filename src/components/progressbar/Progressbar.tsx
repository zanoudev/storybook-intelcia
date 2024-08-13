import React from 'react';
import './Progressbar.css';
import { HomeFilledIcon, SlashDividerIcon, ChevronRightIcon, ThreeDotsIcon } from '../CustomIcons'; // Update the import to include all necessary icons

export interface ProgressbarProps {
    progress?: 'zero' | 'ten' | 'twenty' | 'thirty' | 'fourty' | 'fifty' | 'sixty' | 'seventy' | 'eighty' | 'ninety' | 'hundred' ;
    labelPosition?: 'none'| 'bottom' | 'right' | 'bottom-floating' | 'top-floating';
}

const Progressbar: React.FC<ProgressbarProps> = ({ progress, labelPosition }) => {

    const getProgressPercentage = () => {
        switch (progress) {
            case 'zero':
                return '0%';
            case 'ten':
                return '10%';
            case 'twenty':
                return '20%';
            case 'thirty':
                return '30%';
            case 'fourty':
                return '40%';
            case 'fifty':
                return '50%';
            case 'sixty':
                return '60%';
            case 'seventy':
                return '70%';
            case 'eighty':
                return '80%';
            case 'ninety':
                return '90%';
            case 'hundred':
                return '100%';
            default:
                return '0%';
        }
    };

    return (
        <div className={`progressbar ${labelPosition}`}>
            <div className='background'>
                <div className={`progress ${progress}`}></div>
            </div>
            <div className={`pourcentage ${labelPosition}`}>
                {getProgressPercentage()}
            </div>
        </div>
    );
};

export default Progressbar;
