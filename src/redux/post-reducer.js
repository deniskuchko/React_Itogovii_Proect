import { postAPI } from "../api/api";

const SET_POST_ID = "SET_POST_ID";
const SET_LIKE = "SET_LIKE";
const SET_UNLIKE = "SET_UNLIKE";

let initialState = {
  post: [],
  isLike: false,
};

let postPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_ID:
      return { ...state, post: action.post };
    case SET_LIKE:
      return { ...state, ...state.post, likes: action.like, isLike: true };

    case SET_UNLIKE:
      return { ...state, ...state.post, likes: action.unLike, isLike: false };
    default:
      return { ...state };
  }
};

const setPostId = (post) => ({
  type: SET_POST_ID,
  post,
});
const increaseLike = (likes) => ({
  type: SET_LIKE,
  like: likes + 1,
});
const decreaseLike = (likes) => ({
  type: SET_UNLIKE,
  unLike: likes - 1,
});

export const getPostId = (postId) => {
  return async (dispatch) => {
    let response = await postAPI.getPostId(postId);
    dispatch(setPostId(response.data));
  };
};
export const increasePostLikes = (postId, likes) => {
  return async (dispatch) => {
    dispatch(increaseLike(likes));
  };
};
export const decreasePostLikes = (postId, likes) => {
  return async (dispatch) => {
    dispatch(decreaseLike(likes));
  };
};
export default postPageReducers;
