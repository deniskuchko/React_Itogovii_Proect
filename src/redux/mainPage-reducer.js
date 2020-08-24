const LIKE = "LIKE";
const UNLIKE = "UNLIKE";
const SETUSERS = "SETUSERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let initialState = {
  articles: [],
  pageSize: 10,
  articlesCount: 0,
  currentPage: 1,
};
const mainPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        articles: state.articles.map((u) => {
          if (u.slug === action.userId) {
            return { ...u, favorited: true };
          }
          return u;
        }),
      };
    case UNLIKE:
      return {
        ...state,
        articles: state.articles.map((u) => {
          if (u.slug === action.userId) {
            return { ...u, favorited: false };
          }
          return u;
        }),
      };
    case SETUSERS:
      return {
        ...state,
        articles: [...action.articles],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        articlesCount: action.count,
      };

    default:
      return state;
  }
};

export const likeAC = (userId) => ({
  type: LIKE,
  userId,
});
export const unLikeAC = (userId) => ({
  type: UNLIKE,
  userId,
});
export const setUsersAC = (articles) => ({
  type: SETUSERS,
  articles,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export default mainPageReducers;
