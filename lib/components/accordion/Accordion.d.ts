import React from 'react';
import './Accordion.css';
export interface AccordionProps {
    title: string;
    state: 'open' | 'closed';
    placeholder: string;
    addMedia?: boolean;
    mediaType?: 'img' | 'video' | 'none';
    mediaURL?: string;
    width?: string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
