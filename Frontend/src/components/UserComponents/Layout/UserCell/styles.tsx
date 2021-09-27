import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const UserCell = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 300px;
  padding: 25px;
  border-radius: 25px;
  background-color: ${colors.secondary};
`;

export const ProfilePicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 15px;
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
  color: ${colors.white};
`;

export const UserStatus = styled.p`
  color: ${colors.gray};
`;