import axios from "axios";

const URL = process.env.REACT_APP_API;

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${URL}/users/signup`, userData);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
