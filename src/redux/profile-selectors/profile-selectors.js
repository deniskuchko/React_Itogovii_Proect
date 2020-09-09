export const getProfile = (state) => {
  return state.profilePage.profile;
};

export const getIsFollowed = (state) => {
  return state.profilePage.isFollowed;
};

export const getUserId = (state) => {
  return state.auth.uiserId;
};
