import { authApi } from "../api/api";

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

export const getAuthUserData = () => {
  return (dispatch) => {
    authApi.me().then((response) => {
      console.log(response.data);
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(response.data));
      }
    });
  };
};
export default authReduser;
