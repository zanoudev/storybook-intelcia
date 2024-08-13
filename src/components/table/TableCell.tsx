import React from 'react';
import './TableCell.css';
import CheckboxBase from '../checkbox/bases/CheckboxBase';
import RadioBase from '../checkbox/bases/RadioBase';
import Switch from '../switch/Switch';
import Avatar from '../avatar/Avatar';
import GroupAvatar from '../avatar/GroupAvatar';
import Badge from '../badges/Badge'
import ValueBadge from '../badges/ValueBadge';
import Progressbar from '../progressbar/Progressbar';
import { EditIcon } from '../CustomIcons';


export interface TableCellProps {
    style?: 'lead-text' | 'lead-checkbox' | 'lead-radio' | 'lead-toggle' | 'lead-avatar' | 'avatar-group' | 'lead-avatar-checkbox' | 'lead-avatar-radio' | 'lead-avatar-toggle' | 'badge' | 'badge-multiple' | 'trend' | 'action-icon' | 'progress-bar' | 'payment-method' | 'star-ratings';
    label?: string;
    addSupportingText: boolean;
    supportingText?: string;
    disabled?: boolean;
    width?: string;
}

const TableCell: React.FC<TableCellProps> = ({style, label, addSupportingText, supportingText, disabled, width }) => {
    const renderContent = () => {
        switch(style) {
            case 'lead-checkbox':
                return <CheckboxBase size='small' />;
            case 'lead-radio':
                return <RadioBase size='small' />;
            case 'lead-toggle':
                return <Switch size='small' checked={false} onChange={() => {}}/>;
            case 'lead-avatar':
                return <Avatar background='icon' size='md' />;
            case 'avatar-group':
                return <GroupAvatar size='xxs' groupCount={3}/>;
            case 'lead-avatar-checkbox':
                return (
                    <>
                        <CheckboxBase size='small' />
                        <Avatar background='icon' size='md' />
                    </>
                );
            case 'lead-avatar-radio':
                return (
                    <>
                        <RadioBase size='small' />
                        <Avatar background='icon' size='md' />
                    </>
                );
            case 'lead-avatar-toggle':
                return (
                    <>
                        <Switch size='small' checked={false} onChange={() => {}}/>
                        <Avatar background='icon' size='md' />
                    </>
                );
            case 'badge':
                return <Badge state='success' rounded={false} label='Label' />;
            // Add cases for other styles with respective components
            case 'trend':
                return (
                    <>
                        {supportingText="MAD 99,00"}
                        <ValueBadge theme='positive' value='20%'/>
                    </>
                );
            case 'action-icon':
                return (
                    <>
                        { addSupportingText && "MAD 99,00"}
                        <EditIcon/>
                    </>
                );
            case 'progress-bar':
                return <Progressbar progress='twenty'/>
            default:
                return null;
        }
    };

    // Styles that should include the text container
    const stylesWithTextContainer = [
        'lead-text', 
        'lead-checkbox', 
        'lead-radio', 
        'lead-toggle', 
        'lead-avatar', 
        'lead-avatar-checkbox', 
        'lead-avatar-radio',
        'lead-avatar-toggle',
        'payment-method'
    ];

    const includeTextContainer = stylesWithTextContainer.includes(style ?? '');

    return (
        <div className= {`table-cell ${style} ${addSupportingText? 'supporting-text' : ''} ${disabled? 'disabled' : ''}`} style={{ width }}>
            {renderContent()}
            {includeTextContainer && (
                <div className='text-container'>
                    <p className='label'>{label}</p>
                    {addSupportingText && supportingText && (
                        <div className="supporting-text">
                            {supportingText}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TableCell;
