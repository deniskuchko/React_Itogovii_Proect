import { userAPI } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
let initialState = {
  profile: null,
  isFollowed: true,
};

const profilePageReducers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        profile: { ...action.profile, followed: true },
      };
    case UNFOLLOW:
      return {
        ...state,
        profile: { ...action.profile, followed: false },
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const follow = (profile) => ({
  type: FOLLOW,
  profile,
});
export const unFollow = (profile) => ({
  type: UNFOLLOW,
  profile,
});

export const followThunk = (profile) => {
  return async (dispatsh) => {
    dispatsh(follow(profile));
    await userAPI.changePersonInfo(profile);
  };
};
export const unFollowThunk = (profile) => {
  return async (dispatsh) => {
    dispatsh(unFollow(profile));
    await userAPI.changePersonInfo(profile);
  };
};

export const getProfileThunk = (userId) => {
  return async (dispatsh) => {
    let responce = await userAPI.getUsers(userId);
    dispatsh(setUsersProfile(responce.data));
  };
};
export default profilePageReducers;
