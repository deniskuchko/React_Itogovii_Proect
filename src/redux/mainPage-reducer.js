const LIKE = "LIKE";
const UNLIKE = "UNLIKE";
const SETUSERS = "SETUSERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
let initialState = {
  post: [],
  pageSize: 1,
  postCount: 0,
  currentPage: 1,
  isFetching: true,
};
const mainPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        post: state.post.map((u) => {
          if (u.id === action.userId) {
            return { ...u, favorited: true };
          }
          return u;
        }),
      };
    case UNLIKE:
      return {
        ...state,
        post: state.post.map((u) => {
          if (u.id === action.userId) {
            return { ...u, favorited: false };
          }
          return u;
        }),
      };
    case SETUSERS:
      return {
        ...state,
        post: [...action.post],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        postCount: action.count,
      };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const like = (userId) => ({
  type: LIKE,
  userId,
});
export const unLike = (userId) => ({
  type: UNLIKE,
  userId,
});
export const setUsers = (post) => ({
  type: SETUSERS,
  post,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
export default mainPageReducers;
