import React from 'react';
import './Tab.css';
export interface TabProps {
    name?: string;
    addOn?: 'badge' | 'icon' | 'none';
    rounded?: boolean;
    disabled?: boolean;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
