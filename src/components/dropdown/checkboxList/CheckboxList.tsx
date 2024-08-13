import React, { useState } from 'react';
import './CheckboxList.css';
import { RightArrowIcon } from '../../CustomIcons';
import CheckboxBase from '../../checkbox/bases/CheckboxBase'

export interface CheckboxListProps {
  state?: 'default' | 'error';
  addID?: boolean;
  ID?: string;
  addCheck?: boolean;
  addIcon?: boolean;
  label?: string;
  size?: 'sm' | 'md';
}

const CheckboxList: React.FC<CheckboxListProps> = ({ 
    state, addID, ID, label, size='md', addCheck, addIcon
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
      <div className='check-label'>
        {addCheck && <CheckboxBase checked='unchecked' size='small' />}
        <label>{label}</label>
      </div>
      <div className='id-icon'>
        {addID && ( <p className='id'>{ID}</p> )}
        {addIcon && <RightArrowIcon />}
      </div>
    </div>
  );
};

export default CheckboxList;
  