import React from 'react';
import { useUsers } from '../hooks/useUsers';

const UserList = () => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
