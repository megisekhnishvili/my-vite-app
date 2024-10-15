// src/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types';

// Function to fetch all users
const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

// Function to fetch a single user by ID
const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
};

// Hook to get the list of users
export const useUsers = () => {
  return useQuery<User[], Error>(['users'], fetchUsers);
};

// Hook to get an individual user by ID
export const useUser = (userId: number) => {
  return useQuery<User, Error>(['user', userId], () => fetchUser(userId), {
    enabled: !!userId, // Ensure the query doesn't run if no ID is passed
  });
};
