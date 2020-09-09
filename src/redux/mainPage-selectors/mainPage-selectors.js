export const getPost = (state) => {
  return state.mainPage.post;
};

export const getPageSize = (state) => {
  return state.mainPage.pageSize;
};

export const getPostCount = (state) => {
  return state.mainPage.postCount;
};

export const getCurrentPage = (state) => {
  return state.mainPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.mainPage.isFetching;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};
