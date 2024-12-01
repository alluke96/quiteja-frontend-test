import { apiClient } from './api';

export const fetchUsers = async ({ page, limit }) => {
  try {
    const response = await apiClient.get('/user', {
      params: {
        page,
        limit,
      },
    })
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await apiClient.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
    const response = await apiClient.put(`/user/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await apiClient.delete(`/user/${userId}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
