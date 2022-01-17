import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const UserCell = styled.div`
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 300px;
  padding: 25px;
  border-radius: 25px;
  background-color: ${COLORS.SECONDARY};

  &:hover {
    background-color: ${COLORS.LIGHT_SECONDARY};
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.GRAY};
  width: 60px;
  height: 60px;
  border-radius: 15px;
`;

export const AvatarImg = styled.img``;

export const AvatarText = styled.p`
  color: ${COLORS.WHITE};
  font-size: 24px;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 25px;
  height: 100%;
`;

export const UserName = styled.p`
  color: ${COLORS.WHITE};
`;

export const UserStatus = styled.p`
  color: ${COLORS.GRAY};
`;
