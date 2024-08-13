import React, { useState } from 'react';
import './RadioList.css';
import { RightArrowIcon } from '../../CustomIcons';
import RadioBase from '../../checkbox/bases/RadioBase'

export interface RadioListProps {
  state?: 'default' | 'error';
  addID?: boolean;
  ID?: string;
  addCheck?: boolean;
  addIcon?: boolean;
  label?: string;
  size?: 'sm' | 'md';
}

const RadioList: React.FC<RadioListProps> = ({ 
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
        {addCheck && <RadioBase checked={false} size='small' />}
        <label>{label}</label>
      </div>
      <div className='id-icon'>
        {addID && ( <p className='id'>{ID}</p> )}
        {addIcon && <RightArrowIcon />}
      </div>
    </div>
  );
};

export default RadioList;
  