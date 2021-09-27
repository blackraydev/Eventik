import styled, { css, CSSObject } from 'styled-components';
import colors from '../../constants/colors';

interface IButtonStyleProps {
  styles?: CSSObject;
}

export const Button = styled.button`
  transition: .25s;
  background: ${colors.lightGray};
  padding: 15px;
  font-size: 18px;
  color: ${colors.white};
  width: 100%;
  height: 55px;
  border-radius: 15px;
  margin-top: 35px;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background: ${colors.pinkHover}
  }

  ${({ styles }: IButtonStyleProps) =>
    css`
      ${styles}
    `
  }
`;