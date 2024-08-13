import React, { useState } from 'react';
import './UserList.css';
import { CheckmarkIcon } from '../../CustomIcons';
import Avatar from '../../avatar/Avatar';
import CheckboxBase from '../../checkbox/bases/CheckboxBase'

export interface UserListProps {
  addID?: boolean;
  ID?: string;
  addAvatar?: boolean;
  addLabel?: boolean;
  name?: string;
  label?: string;
  size?: 'sm' | 'md';
}

const UserList: React.FC<UserListProps> = ({ 
    addID, ID, addAvatar, addLabel, label, name, size='md',
  }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`container ${addID ? 'withID' : ''} ${size} ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className={`info ${addAvatar ? 'withAvatar' : ''} ${addLabel ? 'withLabel' : ''}`}>
        {addAvatar && <Avatar size={size} background='icon' />}
        <div className='info-text'>
          <p className='name'>{name}</p>
          {addLabel && <p className='label'>{label}</p>}
        </div>
      </div>
      <div className='id-icon'>
        {addID && ( <p className='id'>{ID}</p> )}
        <CheckmarkIcon />
      </div>
    </div>
  );
};

export default UserList;
  