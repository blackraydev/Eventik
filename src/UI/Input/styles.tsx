import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

interface IInputHolderStyleProps {
  withoutMargin?: boolean;
}

export const Input = styled.input`
  transition: .25s;
  width: 100%;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  background: inherit;
  border: 1px solid ${colors.gray};
  color: ${colors.white};

  &:focus {
    border: 1px solid ${colors.pink};
  }

  &::placeholder {
    color: ${colors.gray};
  }
`;

export const InputHolder = styled.div`
  width: 100%;

  ${({ withoutMargin }: IInputHolderStyleProps) => 
    !withoutMargin &&
    css`
      margin-bottom: 25px;
    `
  }

  ${Input} {
    ${({ withoutMargin }: IInputHolderStyleProps) => 
      !withoutMargin &&
      css`
        margin-top: 10px;
      `
    }
  }
`;

export const Label = styled.p`
  color: ${colors.paragraph};
`;