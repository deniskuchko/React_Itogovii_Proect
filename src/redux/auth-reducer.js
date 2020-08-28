const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  password: null,
  isAuth: false,
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};

export const setUserData = (userId, email, password) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    password,
  },
});
export default authReduser;
