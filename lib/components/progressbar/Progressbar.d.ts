import React from 'react';
import './Progressbar.css';
export interface ProgressbarProps {
    progress?: 'zero' | 'ten' | 'twenty' | 'thirty' | 'fourty' | 'fifty' | 'sixty' | 'seventy' | 'eighty' | 'ninety' | 'hundred';
    labelPosition?: 'none' | 'bottom' | 'right' | 'bottom-floating' | 'top-floating';
}
declare const Progressbar: React.FC<ProgressbarProps>;
export default Progressbar;
