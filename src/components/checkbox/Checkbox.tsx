import React, { FC, useRef, useEffect } from 'react';
import './Checkbox.css';
// Import the RadioBase component
import RadioBase from './bases/RadioBase';
import CheckboxBase from './bases/CheckboxBase';

export interface CheckboxProps {
  label: string;
  supportingText?: string;
  disabled?: boolean;
  focused?: boolean;
  checked?: boolean;
  addLabel?: boolean;
  addSupportingText?: boolean;
  type?: 'radio' | 'checkbox'; // New prop to determine type of input
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  supportingText,
  disabled,
  focused,
  checked,
  addLabel = true,
  addSupportingText = true,
  type = 'radio', // Default to radio type if not specified
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
    <div className={`checkbox-container ${addSupportingText && supportingText ? 'with-supporting-text' : ''}`}>
      {type==='radio' && <RadioBase size='medium'/>}
      {type==='checkbox' && <CheckboxBase size="medium"/>}
      <div className='text-container'>
        {addLabel && <p className='label'>{label}</p>}
        {addSupportingText && <p className='supporting-text'>{supportingText}</p>}
      </div>
    </div>
  );
};

export default Checkbox;
