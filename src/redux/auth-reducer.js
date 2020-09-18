import { authApi, userAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
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

export const setUserData = (userId, login, email, password, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    login,
    email,
    password,
    isAuth,
  },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authApi.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(response.data));
      }
    });
  };
};
export const getLogin = (login, password, rememberMe) => {
  return (dispatch) => {
    authApi.login().then((response) => {
      let arrUsers = response.data;
      let userLogin = arrUsers.filter((el) => {
        return el.login === login && el.password === password;
      });
      userLogin[0]
        ? dispatch(
            setUserData(
              userLogin[0].id,
              userLogin[0].login,
              userLogin[0].email,
              userLogin[0].password,
              true
            )
          )
        : alert("Not correct email or password ");
    });
  };
};
export const setNewUserData = (login, email, password, rememberMe) => {
  return (dispatch) => {
    authApi
      .signUp(login, email, password, rememberMe)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch(
          setUserData(data.id, data.login, data.email, data.password, true)
        );
      });
  };
};
export const changeUserData = (userId, login, email, password) => {
  return async (dispatch) => {
    let response = await userAPI.changeUser(userId, login, email, password);
    dispatch(
      setUserData(
        response.data.userId,
        response.data.login,
        response.data.email,
        response.data.password,
        true
      )
    );
  };
};

export default authReduser;
