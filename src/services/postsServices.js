import axios from "axios";

const URL = process.env.REACT_APP_API;

export const getApiPosts = async () => {
  try {
    const response = await axios.get(`${URL}/posts/list`, {
      withCredentials: true
    });
    if (response.status === 200) {
      const posts = response.data;
      return posts;
    }
  } catch (error) {
    console.error(error);
    return {
      error: error.message
    };
  }
};

export const getApiPostById = async (id) => {
  try {
    const response = await axios.get(`${URL}/posts/post/${id}`, {
      withCredentials: true
    });
    if (response.status === 200) {
      const post = response.data;
      return post;
    }
  } catch (error) {
    console.error(error);
    return {
      error: error.message
    };
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${URL}/posts/create`, postData, {
      withCredentials: true
    });
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
      console.log("RESPONSE POST ERROR : ", error.response);
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

export const editApiPost = async (postData) => {
  try {
    const { id, title, author, content } = postData;
    const newValues = {
      title,
      author,
      content
    };
    const response = await axios.put(`${URL}/posts/post/${id}`, newValues, {
      withCredentials: true
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return {
      error: error.message
    };
  }
};

export const deleteApiPost = async (id) => {
  try {
    const response = await axios.delete(`${URL}/posts/post/${id}`, {
      withCredentials: true
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return {
      error: error.message
    };
  }
};
