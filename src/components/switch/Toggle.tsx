import React, { FC, useRef, useEffect } from 'react';
import './Toggle.css';
// Import the RadioBase component
import Switch from './Switch';

export interface ToggleProps {
  label: string;
  supportingText?: string;
  disabled?: boolean;
  focused?: boolean;
  addLabel?: boolean;
  addSupportingText?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  label,
  supportingText,
  disabled,
  focused,
  addLabel = true,
  addSupportingText = true,
}) => {
  // Conditionally set addSupportingText to false if addLabel is false
  if (!addLabel) {
    addSupportingText = false;
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div className={`toggle-container ${addSupportingText && supportingText ? 'with-supporting-text' : ''}`}>
        <Switch checked={false} onChange={() => {}} />
        <div className='text-container'>
            {addLabel && <p className='label'>{label}</p>}
            {addSupportingText && <p className='supporting-text'>{supportingText}</p>}
        </div>
    </div>
  );
};

export default Toggle;
