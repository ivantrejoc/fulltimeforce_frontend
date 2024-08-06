import { GET_POSTS, GET_POST_BY_ID } from "./action-types";

const initialState = {
  posts: [],
  postById: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST_BY_ID:
      return { ...state, postById: { ...state.postById, ...action.payload } };
    default:
      return { ...state };
  }
};

export default rootReducer;
