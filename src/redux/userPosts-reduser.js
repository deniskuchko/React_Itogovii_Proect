import { userAPI } from "../api/api";

const SET_USER_POST = "SET_USER_POST";

let initialState = {
  myPost: [],
};

const userPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POST:
      return { ...state, myPost: action.myPost };
    default:
      return state;
  }
};

const setUserPost = (myPost) => ({
  type: SET_USER_POST,
  myPost,
});

export const getUserPosts = (userId) => async (dispatch) => {
  let response = await userAPI.getMyPosts();
  let myArrayPosts = response.data.filter((u) => u.userId == userId);
  dispatch(setUserPost(myArrayPosts));
};

export default userPostsReducer;
