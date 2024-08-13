import React from 'react';
import './DarkToast.css';
export interface DarkToastProps {
    label: string;
    subtitle: string;
    addSubtitle?: boolean;
    addIcon?: boolean;
    addCloseIcon?: boolean;
    type?: 'copied' | 'exportation' | 'printer' | 'action done' | 'waiting' | 'no connection';
}
declare const DarkToast: React.FC<DarkToastProps>;
export default DarkToast;
