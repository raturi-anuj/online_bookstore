import axios from 'axios';

// Set the base URL for all requests
const api = axios.create({
  baseURL: 'http://localhost:5000', // Change this to your actual backend URL
});

// Function to handle user sign-in
export const signIn = async (email, password) => {
  try {
    const response = await api.post('/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to handle user sign-up
export const signUp = async (mobile, email, password) => {
  try {
    const response = await api.post('/signup', { mobile, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch books
export const getBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error.response.data;
  }
};
