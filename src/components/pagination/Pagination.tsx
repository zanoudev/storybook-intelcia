import React, { useState } from 'react';
import './Pagination.css';
import './PageSelect';
import './PageControl';

import { ChevronLeftIcon, ChevronRightIcon, ThreeDotsIcon } from '../CustomIcons'
import PageSelect from './PageSelect';
import PageControl from './PageControl';

export interface PaginationProps {
    style?: 'no-overflow' | 'overflow' | 'single-page';
    label?: string;
}

const Pagination: React.FC<PaginationProps> = ({ style, label="Page 1 of 100" }) => {

    return (
        <div className={`pagination ${style}`}>
            <p>{label}</p>
            <div className='pagination-control'>
                <PageSelect/>
                <PageControl style='left'/>
                <PageControl style='page-number' number={1}/>  {/* Single page style only contains page number 1 */}
                {style === 'no-overflow' && 
                (<>
                    <PageControl style='page-number' number={2}/>
                    <PageControl style='page-number' number={3}/>
                    <PageControl style='page-number' number={4}/>
                    <PageControl style='page-number' number={5}/>
                </>)}
                {style === 'overflow' && 
                (<>
                    <PageControl style='page-number' number={2}/>
                    <PageControl style='page-number' number={3}/>
                    <PageControl style='overflow'/>
                    <PageControl style='page-number' number={25}/>
                </>)}
                <PageControl style='right'/>
            </div>
            
        </div>
    );
};

export default Pagination;