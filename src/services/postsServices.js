import axios from "axios";

const URL = process.env.REACT_APP_API;

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${URL}/posts/create`, postData, {withCredentials: true});
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 400) {
      return {
        error: error.response.data.message
      };
    } else if (error.response && error.response.status === 401) {
      console.log("RESPONSE EN ERROR POST: ", error.response);
      return {
        error: error.response.data.message
      };
    } else {
      return {
        error: error.response.data.message
      };
    }
  }
};
