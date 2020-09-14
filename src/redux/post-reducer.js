import { postAPI } from "../api/api";

const SET_POST_ID = "SET_POST_ID";

let initialState = {
  post: 123,
};

let postPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_ID:
      return { ...state, post: action.post };
    default:
      return { ...state };
  }
};

const setPostId = (post) => ({
  type: SET_POST_ID,
  post,
});

export const getPostId = (postId) => {
  return async (dispatch) => {
    let response = await postAPI.getPostId(postId);
    dispatch(setPostId(response.data));
  };
};
export default postPageReducers;
