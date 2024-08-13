import React from 'react';
import './Breadcrumbs.css';
export interface BreadcrumbsProps {
    divider?: 'slash' | 'chevron';
    level?: 1 | 2;
    label?: string;
    current?: string;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
