import React, { useState } from 'react';
import './OptionList.css';
import { RightArrowIcon, UserIcon } from '../../CustomIcons';
import RadioBase from '../../checkbox/bases/RadioBase'

export interface OptionListProps {
  state?: 'default' | 'disabled';
  addID?: boolean;
  ID?: string;
  addCheck?: boolean;
  addRightIcon?: boolean;
  addLeftIcon?: boolean;
  label?: string;
  size?: 'sm' | 'md';
}

const OptionList: React.FC<OptionListProps> = ({ 
    state, addID, ID, label, size='md', addCheck, addRightIcon, addLeftIcon
  }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`container ${state} ${addID ? 'withID' : ''} ${size} ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='icon-label'>
        {addLeftIcon && <UserIcon color="#98A2B3" width="18" height="18" />}
        <label>{label}</label>
      </div>
      <div className='id-icon'>
        {addID && ( <p className='id'>{ID}</p> )}
        {addRightIcon && <RightArrowIcon />}
      </div>
    </div>
  );
};

export default OptionList;
  