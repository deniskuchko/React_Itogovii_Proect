import { postAPI } from "../api/api";

const SET_NEW_POST = "SET_NEW_POST";

let initialState = {
  title: null,
  articleAbout: null,
  textOfArticle: null,
  keywords: [],
  userId: null,
};

const myArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_POST:
      return { ...state, ...action.postload };
    default:
      return state;
  }
};

export const setNewArticle = (
  title,
  articleAbout,
  textOfArticle,
  keywords,
  userId
) => ({
  type: SET_NEW_POST,
  postload: { title, articleAbout, textOfArticle, keywords, userId },
});

export const setNewArticleReducer = (
  title,
  articleAbout,
  textOfArticle,
  keywords,
  userId
) => (dispatch) => {
  postAPI
    .setNewPost(title, articleAbout, textOfArticle, keywords, userId)
    .then((response) => {
      console.log(response.data);
      //dispatch(setNewArticle(response.data))
    });
};

export default myArticlesReducer;
