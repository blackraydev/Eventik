import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserItem = styled.div`
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  border-radius: 20px;
  height: 70px;
  background: ${COLORS.SECONDARY};
  margin-bottom: 15px;

  &:hover {
    background: ${COLORS.LIGHT_SECONDARY};
  }
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;

export const RightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.GRAY};
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

export const AvatarImg = styled.img``;

export const AvatarText = styled.p`
  color: ${COLORS.WHITE};
  font-size: 18px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

export const UserFullName = styled.p`
  color: ${COLORS.WHITE};
`;

export const UserStatus = styled.p`
  color: ${COLORS.LIGHT_GRAY};
`;

export const FollowButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
