import styled, { css } from 'styled-components';
import { COLORS } from '../../../../../constants/colors';

interface ICustomLinkStyleProps {
  isActive?: boolean;
}

export const CustomLink = styled.div<ICustomLinkStyleProps>`
  transition: 0.15s;
  width: 100%;
  height: 60px;
  border-left: 2px solid ${COLORS.SECONDARY};

  a {
    transition: 0.15s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    color: ${COLORS.LIGHT_GRAY};
    text-decoration: none;

    svg {
      transition: 0.15s;
      width: 20px;
      height: 20px;
      margin-right: 15px;
      fill: ${COLORS.GRAY};
    }
  }

  &:hover {
    background-color: ${COLORS.LIGHT_SECONDARY};
  }

  ${({ isActive }: ICustomLinkStyleProps) =>
    (isActive &&
      css`
        border-left: 2px solid ${COLORS.PINK};

        a {
          svg {
            fill: ${COLORS.PINK};
          }

          p {
            color: ${COLORS.PINK};
          }
        }
      `) ||
    (!isActive &&
      css`
        &:hover {
          background-color: ${COLORS.LIGHT_SECONDARY};

          a {
            svg {
              fill: ${COLORS.PINK_HOVER};
            }

            p {
              color: ${COLORS.PINK_HOVER};
            }
          }
        }
      `)}
`;

export const Title = styled.p`
  transition: 0.15s;
`;

export const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
