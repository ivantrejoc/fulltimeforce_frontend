import { GET_POSTS, GET_POST_BY_ID, EDIT_POST } from "./action-types";

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
    case EDIT_POST:
      const postId = action.payload.id;
      const index = state.posts.findIndex((post) => post._id === postId);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default rootReducer;
