import React from 'react';
import './PageControl.css';
export interface PageControlProps {
    style?: 'left' | 'right' | 'page-number' | 'overflow';
    number?: number;
    disabled?: boolean;
}
declare const PageControl: React.FC<PageControlProps>;
export default PageControl;
