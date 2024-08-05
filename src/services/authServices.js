import axios from "axios";

const URL = process.env.REACT_APP_API;

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, userData);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

export const signOut = async () => {
    try {
        const response = await axios.post(`${URL}/auth/signout`);
        if (response.status === 200) {
            console.log("RESPUESTA EN EL SERVICE: ", response);
          return response;
        }
      } catch (error) {
        console.error(error);
        return error.message;
      }
}