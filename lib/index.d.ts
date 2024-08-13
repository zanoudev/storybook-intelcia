import React, { FC } from 'react';

interface AccordionProps {
    title: string;
    state: 'open' | 'closed';
    placeholder: string;
    addMedia?: boolean;
    mediaType?: 'img' | 'video' | 'none';
    mediaURL?: string;
    width?: string;
}
declare const Accordion: React.FC<AccordionProps>;

interface AccordionButtonProps {
    initialState: 'open' | 'closed';
}
declare const AccordionButton: React.FC<AccordionButtonProps>;

interface AvatarProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    background?: 'image' | 'icon' | 'initials';
    image?: string;
    initials?: string;
    focused?: boolean;
    onlineIndicator?: boolean;
}
declare const Avatar: React.FC<AvatarProps>;

interface AvatarBadgeProps {
    status: 'approved' | 'denied';
    initials: string;
}
declare const AvatarBadge: React.FC<AvatarBadgeProps>;

interface GroupAvatarProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md';
    groupCount?: 1 | 2 | 3 | 4;
    otherAvatars?: string;
    colors?: string[];
}
declare const GroupAvatar: React.FC<GroupAvatarProps>;

interface BadgeProps {
    rounded?: boolean;
    label: string;
    state?: 'gray' | 'success' | 'warning' | 'error' | 'primary';
    addLeftIcon?: boolean;
    addRightIcon?: boolean;
    addAvatar?: boolean;
}
declare const Badge: React.FC<BadgeProps>;

interface ValueBadgeProps {
    value: string;
    iconPosition?: 'left' | 'right';
    iconDirection?: 'up' | 'down';
    theme?: 'positive' | 'negative' | 'neutral';
}
declare const ValueBadge: React.FC<ValueBadgeProps>;

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary';
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    icon: 'left' | 'right' | 'none';
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
}
declare const Button: React.FC<ButtonProps>;

interface BreadcrumbsProps {
    divider?: 'slash' | 'chevron';
    level?: 1 | 2;
    label?: string;
    current?: string;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;

interface CheckboxProps {
    label: string;
    supportingText?: string;
    disabled?: boolean;
    focused?: boolean;
    checked?: boolean;
    addLabel?: boolean;
    addSupportingText?: boolean;
    type?: 'radio' | 'checkbox';
}
declare const Checkbox: FC<CheckboxProps>;

interface CheckboxBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: 'unchecked' | 'checked' | 'indeterminate';
    size?: 'small' | 'medium';
}
declare const CheckboxBase: React.FC<CheckboxBaseProps>;

interface CheckCircleBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: boolean;
    size?: 'small' | 'medium';
}
declare const CheckCircleBase: React.FC<CheckCircleBaseProps>;

interface RadioBaseProps {
    focused?: boolean;
    disabled?: boolean;
    checked?: boolean;
    size?: 'small' | 'medium';
}
declare const RadioBase: React.FC<RadioBaseProps>;

interface CheckboxListProps {
    state?: 'default' | 'error';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const CheckboxList: React.FC<CheckboxListProps>;

interface ChipProps {
    size?: 'sm' | 'md';
    state?: 'default' | 'disabled';
    addAvatar?: boolean;
    addIconRight?: boolean;
    addIconLeft?: boolean;
}
declare const Chip: React.FC<ChipProps>;

interface DropdownBasicProps {
    label: string;
    placeholder: string;
    hint?: string;
    state?: 'default' | 'disabled' | 'error';
    addLeftIcon?: boolean;
    leftIcon?: string;
    width?: string;
}
declare const DropdownBasic: React.FC<DropdownBasicProps>;

interface OptionListProps {
    state?: 'default' | 'disabled';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addRightIcon?: boolean;
    addLeftIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const OptionList: React.FC<OptionListProps>;

interface RadioListProps {
    state?: 'default' | 'error';
    addID?: boolean;
    ID?: string;
    addCheck?: boolean;
    addIcon?: boolean;
    label?: string;
    size?: 'sm' | 'md';
}
declare const RadioList: React.FC<RadioListProps>;

interface UserListProps {
    addID?: boolean;
    ID?: string;
    addAvatar?: boolean;
    addLabel?: boolean;
    name?: string;
    label?: string;
    size?: 'sm' | 'md';
}
declare const UserList: React.FC<UserListProps>;

declare const FileUpload: React.FC;

interface InputProps {
    label: string;
    placeholder: string;
    state?: 'default' | 'disabled' | 'error';
    hint?: string;
    leftIcon?: string;
    addLeftIcon?: boolean;
    rightIcon?: string;
    addRightIcon?: boolean;
    width?: string;
}
declare const Input: React.FC<InputProps>;

interface ColorToastProps {
    label: string;
    addSubtitle?: boolean;
    addIcon?: boolean;
    addCloseIcon?: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
}
declare const ColorToast: React.FC<ColorToastProps>;

interface DarkToastProps {
    label: string;
    subtitle: string;
    addSubtitle?: boolean;
    addIcon?: boolean;
    addCloseIcon?: boolean;
    type?: 'copied' | 'exportation' | 'printer' | 'action done' | 'waiting' | 'no connection';
}
declare const DarkToast: React.FC<DarkToastProps>;

interface SnackbarProps {
    label: string;
    subtitle?: string;
    addSubtitle?: boolean;
    addUndo?: boolean;
    theme?: 'light' | 'dark';
}
declare const Snackbar: React.FC<SnackbarProps>;

interface PageControlProps {
    style?: 'left' | 'right' | 'page-number' | 'overflow';
    number?: number;
    disabled?: boolean;
}
declare const PageControl: React.FC<PageControlProps>;

interface PageSelectProps {
    pressed?: boolean;
    disabled?: boolean;
}
declare const PageSelect: React.FC<PageSelectProps>;

interface PaginationProps {
    style?: 'no-overflow' | 'overflow' | 'single-page';
    label?: string;
}
declare const Pagination: React.FC<PaginationProps>;

interface ProgressbarProps {
    progress?: 'zero' | 'ten' | 'twenty' | 'thirty' | 'fourty' | 'fifty' | 'sixty' | 'seventy' | 'eighty' | 'ninety' | 'hundred';
    labelPosition?: 'none' | 'bottom' | 'right' | 'bottom-floating' | 'top-floating';
}
declare const Progressbar: React.FC<ProgressbarProps>;

interface SwitchProps {
    size?: 'small' | 'medium';
    checked: boolean;
    onChange: () => void;
}
declare const Switch: React.FC<SwitchProps>;

interface ToggleProps {
    label: string;
    supportingText?: string;
    disabled?: boolean;
    focused?: boolean;
    addLabel?: boolean;
    addSupportingText?: boolean;
}
declare const Toggle: FC<ToggleProps>;

interface TableCellProps {
    style?: 'lead-text' | 'lead-checkbox' | 'lead-radio' | 'lead-toggle' | 'lead-avatar' | 'avatar-group' | 'lead-avatar-checkbox' | 'lead-avatar-radio' | 'lead-avatar-toggle' | 'badge' | 'badge-multiple' | 'trend' | 'action-icon' | 'progress-bar' | 'payment-method' | 'star-ratings';
    label?: string;
    addSupportingText: boolean;
    supportingText?: string;
    disabled?: boolean;
    width?: string;
}
declare const TableCell: React.FC<TableCellProps>;

interface TableHeaderCellProps {
    addCheckbox?: boolean;
    addText?: boolean;
    color?: 'white' | 'gray';
    label?: string;
    disabled?: boolean;
    helpIcon?: boolean;
    arrow?: 'none' | 'up' | 'down';
    width?: string;
}
declare const TableHeaderCell: React.FC<TableHeaderCellProps>;

interface TableHeaderTextProps {
    label?: string;
    disabled?: boolean;
    helpIcon?: boolean;
    arrow?: 'none' | 'up' | 'down';
    width?: string;
}
declare const TableHeaderText: React.FC<TableHeaderTextProps>;

interface TabProps {
    name?: string;
    addOn?: 'badge' | 'icon' | 'none';
    rounded?: boolean;
    disabled?: boolean;
}
declare const Tab: React.FC<TabProps>;

interface TooltipProps {
    text: string;
    addSupportText?: boolean;
    supportText?: string;
    arrow?: 'none' | 'top-center' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
    theme?: 'light' | 'dark';
}
declare const Tooltip: React.FC<TooltipProps>;

export { Accordion, AccordionButton, Avatar, AvatarBadge, Badge, Breadcrumbs, Button, CheckCircleBase, Checkbox, CheckboxBase, CheckboxList, Chip, ColorToast, DarkToast, DropdownBasic, FileUpload, GroupAvatar, Input, OptionList, PageControl, PageSelect, Pagination, Progressbar, RadioBase, RadioList, Snackbar, Switch, Tab, TableCell, TableHeaderCell, TableHeaderText, Toggle, Tooltip, UserList, ValueBadge };
