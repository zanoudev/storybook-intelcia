import React, { useState } from 'react';
import './AccordionButton.css';
import { ChevronDownIcon, ChevronUpIcon } from '../CustomIcons';

export interface AccordionButtonProps {
    initialState: 'open' | 'closed'; // Renamed to initialState to avoid conflict with state keyword
}

const AccordionButton: React.FC<AccordionButtonProps> = ({ initialState }) => {
    const [state, setState] = useState(initialState);

    const toggleState = () => {
        setState(state === 'open' ? 'closed' : 'open');
    };

    const width = '35px';
    const height = '23px';

    return (
        <div className={`accordion-button ${state}`} onClick={toggleState}>
            {state === 'open' ? (
                <ChevronUpIcon color='#FFFFFF' width={width} height={height} />
            ) : (
                <ChevronDownIcon color='#EA287C' width={width} height={height} />
            )}
        </div>
    );
};

export default AccordionButton;
