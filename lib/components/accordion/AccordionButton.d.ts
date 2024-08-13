import React from 'react';
import './AccordionButton.css';
export interface AccordionButtonProps {
    initialState: 'open' | 'closed';
}
declare const AccordionButton: React.FC<AccordionButtonProps>;
export default AccordionButton;
