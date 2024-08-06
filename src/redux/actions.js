import { GET_POST_BY_ID, GET_POSTS } from "./action-types";
import { getApiPosts, getApiPostById } from "../services/postsServices";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const apiPosts = await getApiPosts();
      if (apiPosts) {
        dispatch({
          type: GET_POSTS,
          payload: apiPosts
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const getPostById = (id) => {
  return async (dispatch) => {
    try {
      const apiPostById = await getApiPostById(id);
      if (apiPostById) {
        dispatch({
          type: GET_POST_BY_ID,
          payload: apiPostById
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};
