import { postAPI } from "../api/api";

const SET_NEW_POST = "SET_NEW_POST";
const SET_SAVE_NEW_ARTICLE = "SET_SAVE_NEW_ARTICLE";

let initialState = {
  name: null,
  title: null,
  articleAbout: null,
  textOfArticle: null,
  keywords: [],
  userId: null,
  isArticle: false,
};

const myArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_POST:
      return { ...state, ...action.postload, isArticle: true };
    case SET_SAVE_NEW_ARTICLE:
      return { ...state, isArticle: false };
    default:
      return state;
  }
};

const setNewArticle = (
  name,
  title,
  articleAbout,
  textOfArticle,
  keywords,
  userId
) => ({
  type: SET_NEW_POST,
  postload: { name, title, articleAbout, textOfArticle, keywords, userId },
});

const setSaveNewArticle = () => ({
  type: SET_SAVE_NEW_ARTICLE,
});

export const setNewArticleReducer = (
  name,
  title,
  articleAbout,
  textOfArticle,
  keywords,
  userId
) => async (dispatch) => {
  let response = await postAPI.setNewPost(
    name,
    title,
    articleAbout,
    textOfArticle,
    keywords,
    userId
  );

  dispatch(setNewArticle(response.data));
  dispatch(setSaveNewArticle());
};

export default myArticlesReducer;
