import {
  GET_POSTS,
  GET_POST_BY_ID,
  EDIT_POST,
  DELETE_POST,
  GET_AUTH
} from "./action-types";

const initialState = {
  posts: [],
  postById: {},
  isAuth: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST_BY_ID:
      return { ...state, postById: { ...state.postById, ...action.payload } };
    case EDIT_POST:
      const postId = action.payload.id;
      const index = state.posts.findIndex((post) => post._id === postId);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      return { ...state };
    case DELETE_POST:
      const postdeleteId = action.payload;
      const updatedPosts = state.posts.filter(
        (post) => post._id !== postdeleteId
      );
      return { ...state, posts: updatedPosts };
    case GET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
