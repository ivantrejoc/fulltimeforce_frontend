import axios from "axios";

const URL = process.env.REACT_APP_API;

export const signIn = async (userCred) => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, userCred, {
      withCredentials: true
    });
    const credentials = await JSON.parse(response.config.data);
    const user = await credentials.email;
    if (response.status === 200) {
      return {
        autheticated: true,
        user: user
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
    const response = await axios.post(
      `${URL}/auth/signout`,
      {},
      { withCredentials: true }
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
