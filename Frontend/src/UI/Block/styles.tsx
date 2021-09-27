import styled from 'styled-components';
import colors from '../../constants/colors';

export const BlockHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 600px;
  padding: 50px 100px;
  background: ${colors.secondary};
  border-radius: 35px;
`;

export const Title = styled.p`
  color: ${colors.white};
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  color: ${colors.paragraph};
  width: 100%;
  margin-bottom: 35px;
  font-weight: 300;
`;

export const OuterText = styled.p`
  color: ${colors.paragraph};
  margin-top: 35px;
`;

export const InnerText = styled.span`
  transition: .25s;
  color: ${colors.pink};
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: ${colors.pinkHover};
  }
`;