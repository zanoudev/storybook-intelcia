import React from 'react';
import './UserList.css';
export interface UserListProps {
    addID?: boolean;
    ID?: string;
    addAvatar?: boolean;
    addLabel?: boolean;
    name?: string;
    label?: string;
    size?: 'sm' | 'md';
}
declare const UserList: React.FC<UserListProps>;
export default UserList;
