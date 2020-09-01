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
        isFollowed: true,
      };
    case UNFOLLOW:
      return {
        ...state,
        isFollowed: false,
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
export const follow = () => ({
  type: FOLLOW,
});
export const unFollow = () => ({
  type: UNFOLLOW,
});
export const getProfileThunk = (userId) => {
  return (dispatsh) => {
    userAPI
      .getUsers(userId)
      .then((responce) => {
        dispatsh(setUsersProfile(responce.data.user[`${userId}`]));
      })
      .catch((e) => alert(`error in get USERS : ${e}`));
  };
};
export default profilePageReducers;
