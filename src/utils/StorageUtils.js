import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (e) {
    console.error('Failed to save the token to storage', e);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (e) {
    console.error('Failed to fetch the token from storage', e);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
  } catch (e) {
    console.error('Failed to remove the token from storage', e);
  }
};
