import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const PhotoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
  padding: 25px;
  width: 250px;
  margin-right: 25px;
  border-radius: 25px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.GRAY};
  width: 200px;
  height: 200px;
  border-radius: 15px;
`;

export const AvatarImg = styled.img``;

export const AvatarText = styled.p`
  color: ${COLORS.WHITE};
  font-size: 60px;
`;
