import axios from "axios";

const URL = process.env.REACT_APP_API;

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, userData, {withCredentials: true});
    if (response.status === 200) {
      console.log("RESPONSE EN SIGNIN: ", response);
      
      return {
        autheticated: true,
        data: response.data
      };
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log("RESPONSE EN SIGNIN: ", error.response);
      return {
        autheticated: false,
        error: "Invalid credentials"
      };
    } else {
      console.log("RESPONSE EN SIGNIN: ", error.response);
      return {
        autheticated: false,
        error: error.message
      };
    }
  }
};

export const signOut = async () => {
  try {
    const response = await axios.post(`${URL}/auth/signout`, {}, {withCredentials: true});
    if (response.status === 200) {
      console.log("RESPUESTA EN EL SERVICE: ", response);
      return response;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
