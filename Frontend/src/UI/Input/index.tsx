import React from 'react';
import { ChangeEvent } from '../../types/eventTypes';
import * as UI from './styles';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
  label?: string;
  placeholder: string;
  type?: string;
  withoutMargin?: boolean
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  withoutMargin
}) => {
  return(
    <UI.InputHolder withoutMargin={withoutMargin}>
      {label && <UI.Label>{label}</UI.Label>}
      <UI.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </UI.InputHolder>
  )
};

export default Input;