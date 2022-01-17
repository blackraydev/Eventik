import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import Input from '../../../../UI/Input';
import Button from '../../../../UI/Button';
import LoadingSpinner from '../../../../UI/LoadingSpinner';
import { IUser } from '../../../../models/IUser';
import * as UI from './styles';

interface IPeopleListProps {
  getUsers: (id: string, query?: string) => (dispatch: Dispatch) => Promise<void>;
  currentUser: IUser;
  users: IUser[];
  isUsersLoading: boolean;
}

const FollowButtonStyles = {
  margin: 0,
  height: '30px',
  padding: '0 15px',
  fontSize: '16px',
};

const PeopleList: React.FC<IPeopleListProps> = ({ getUsers, currentUser, users, isUsersLoading }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getUsers(currentUser.id, searchQuery);
  }, []);

  return (
    <UI.ListWrapper>
      <Input value={searchQuery} onChange={(e: any) => setSearchQuery(e.target.value)} placeholder="Find people" />
      {isUsersLoading ? (
        <LoadingSpinner />
      ) : (
        users.map((user) => (
          <UI.UserItem>
            <UI.LeftPart>
              <UI.Avatar>
                <UI.AvatarText>
                  {user.name[0]}
                  {user.lastName[0]}
                </UI.AvatarText>
              </UI.Avatar>
              <UI.UserInfo>
                <UI.UserFullName>
                  {user.name} {user.lastName}
                </UI.UserFullName>
                {user.status && <UI.UserStatus>{user.status}</UI.UserStatus>}
              </UI.UserInfo>
            </UI.LeftPart>
            <UI.RightPart>
              <UI.FollowButtonWrapper>
                <Button value="Follow" onClick={() => console.log('Clicked')} styles={FollowButtonStyles} />
              </UI.FollowButtonWrapper>
            </UI.RightPart>
          </UI.UserItem>
        ))
      )}
    </UI.ListWrapper>
  );
};

export default PeopleList;
