import React from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../../components/UserComponents/People/PeopleList';
import { useActions } from '../../../hooks/useActions';
import PrivateLayout from '../../../layouts/PrivateLayout';
import { authUserSelector } from '../../../store/Auth/selectors';
import { usersLoadingSelector, usersSelector } from '../../../store/Users/selectors';

interface IFriendsPageProps {}

const FriendsPage: React.FC<IFriendsPageProps> = () => {
  const { getUsers } = useActions();

  const currentUser = useSelector(authUserSelector);
  const users = useSelector(usersSelector);
  const isUsersLoading = useSelector(usersLoadingSelector);

  const props = {
    getUsers,
    currentUser,
    users,
    isUsersLoading,
  };

  return (
    <PrivateLayout>
      <PeopleList {...props} />
    </PrivateLayout>
  );
};

export default FriendsPage;
