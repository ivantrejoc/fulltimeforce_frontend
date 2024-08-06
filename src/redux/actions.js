import { GET_POSTS } from "./action-types";
import { getApiPosts } from "../services/postsServices";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const apiPosts = await getApiPosts();
      if (apiPosts) {
        dispatch({ type: GET_POSTS, payload: apiPosts });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};
