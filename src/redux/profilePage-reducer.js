const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
  profile: null,
};
const profilePageReducers = (state = initialState, action) => {
  switch (action.type) {
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
export default profilePageReducers;
