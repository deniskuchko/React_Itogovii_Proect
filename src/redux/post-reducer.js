import { postAPI } from "../api/api";

const SET_POST = "SET_POST";

const SET_POST_ID = "SET_POST_ID";
const SET_LIKE = "SET_LIKE";
const SET_UNLIKE = "SET_UNLIKE";
const TOOGLE_LIKE = "TOOGLE_LIKE";

let initialState = {
  post: [],
  isLike: false,
};

let postPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state };
    case SET_POST_ID:
      return { ...state, post: action.post };
    case SET_LIKE:
      return {
        ...state,
        ...state.post,
        likes: state.post.likes + 1,
      };

    case SET_UNLIKE:
      return {
        ...state,
        ...state.post,
        likes: state.post.likes + 0,
      };
    case TOOGLE_LIKE:
      return {
        ...state,
        isLike: action.isLike,
      };
    default:
      return { ...state };
  }
};
export const setPost = () => ({
  type: SET_POST,
});
const setPostId = (post) => ({
  type: SET_POST_ID,
  post,
});
const increaseLike = () => ({
  type: SET_LIKE,
});
const decreaseLike = () => ({
  type: SET_UNLIKE,
});
const toogleLike = (isLike) => ({
  type: TOOGLE_LIKE,
  isLike,
});

export const increasePostLikes = (
  id,
  name,
  image,
  title,
  articleAbout,
  textOfArticle,
  likes,
  favorited,
  keywords,
  userId
) => {
  return async (dispatch) => {
    dispatch(toogleLike(true));
    dispatch(increaseLike());
    let response = await postAPI.setLikePost(
      id,
      name,
      image,
      title,
      articleAbout,
      textOfArticle,
      likes + 1,
      favorited,
      keywords,
      userId
    );
    dispatch(getPostId(response.data.id));
  };
};
export const decreasePostLikes = (
  id,
  name,
  image,
  title,
  articleAbout,
  textOfArticle,
  likes,
  favorited,
  keywords,
  userId
) => {
  return async (dispatch) => {
    dispatch(toogleLike(false));
    dispatch(decreaseLike());
    let response = await postAPI.setLikePost(
      id,
      name,
      image,
      title,
      articleAbout,
      textOfArticle,
      likes - 1,
      favorited,
      keywords,
      userId
    );
    dispatch(getPostId(response.data.id));
  };
};
export const getPostId = (postId) => {
  return async (dispatch) => {
    let response = await postAPI.getPostId(postId);
    dispatch(setPostId(response.data));
  };
};
export default postPageReducers;
