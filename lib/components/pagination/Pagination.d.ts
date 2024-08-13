import React from 'react';
import './Pagination.css';
import './PageSelect';
import './PageControl';
export interface PaginationProps {
    style?: 'no-overflow' | 'overflow' | 'single-page';
    label?: string;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
