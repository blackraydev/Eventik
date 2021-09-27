import React from 'react';
import { CSSObject } from 'styled-components';
import * as UI from './styles';

interface IButtonProps {
  value: string;
  onClick: () => void;
  styles?: CSSObject;
}

const Button: React.FC<IButtonProps> = ({
  value,
  onClick,
  styles
}) => {
  return(
    <UI.Button styles={styles} onClick={onClick}>
      {value}
    </UI.Button>
  );
};

export default Button;