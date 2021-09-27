import styled, { css } from "styled-components";
import colors from "../../../../../constants/colors";

interface ICustomLinkStyleProps {
  isActive?: boolean;
}

export const CustomLink = styled.div`
  transition: .15s;
  width: 100%;
  height: 60px;
  border-left: 2px solid ${colors.secondary};

  a {
    transition: .15s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    color: ${colors.lightGray};
    text-decoration: none;

    svg {
      transition: .15s;
      width: 20px;
      height: 20px;
      margin-right: 15px;
      fill: ${colors.gray};
    }
  }

  &:hover {
    background-color: ${colors.lightSecondary};
  }

  ${({ isActive }: ICustomLinkStyleProps) =>
    isActive &&
    css`
      border-left: 2px solid ${colors.pink};

      a {
        svg {
          fill: ${colors.pink};
        }
  
        p {
          color: ${colors.pink};
        }
      }
    `
    || !isActive &&
    css`
      &:hover {
        background-color: ${colors.lightSecondary};
    
        a {
          svg {
            fill: ${colors.pinkHover};
          }
      
          p {
            color: ${colors.pinkHover};
          }
        }
      }
    `
  }
`;

export const Title = styled.p`
  transition: .15s;
`;

export const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;