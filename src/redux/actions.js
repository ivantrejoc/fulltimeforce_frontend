import { GET_POST_BY_ID, GET_POSTS, EDIT_POST } from "./action-types";
import {
  getApiPosts,
  getApiPostById,
  editApiPost
} from "../services/postsServices";

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

export const editPost = (postData) => {
  return async (dispatch) => {    
    try {     
      const updatePost = await editApiPost(postData);
      const response = updatePost.message;
      console.log("RESPONSE EN ACTIONS: ", response);
      if (response) {
        dispatch({
          type: EDIT_POST,
          payload: postData
        });
        return (response);
      } else {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};
