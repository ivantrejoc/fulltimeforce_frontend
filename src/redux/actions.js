import {
  GET_POST_BY_ID,
  GET_POSTS,
  EDIT_POST,
  DELETE_POST,
  GET_AUTH
} from "./action-types";
import {
  getApiPosts,
  getApiPostById,
  editApiPost,
  deleteApiPost
} from "../services/postsServices";
import { signIn } from "../services/authServices";
import { redirect, useNavigate } from "react-router-dom";

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

      if (response) {
        dispatch({
          type: EDIT_POST,
          payload: postData
        });
        return response;
      } else {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const deleteBlogPost = await deleteApiPost(id);
      const response = deleteBlogPost.message;
      if (response) {
        dispatch({
          type: DELETE_POST,
          payload: id
        });
        alert(response);
        return response;
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const getAuthorization = (userCred) => {
  return async (dispatch) => {
    try {
      console.log("CREDENTIALS IN ACTION: ", userCred);
      const authorization = await signIn(userCred);
      console.log("RESPONSE IN ACTION: ", authorization);
      if (authorization.autheticated) {
        dispatch({
          type: GET_AUTH,
          payload: authorization
        });
        redirect("/");
        return authorization;
      } else {
        alert(authorization.message);
        throw new Error(authorization.message);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};
