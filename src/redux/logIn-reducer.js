const TOUCH_EMAIL_LOG_IN = "TOUCH-EMAIL-LOGIN";
const TOUCH_PASSWORD_LOG_IN = "TOUCH-PASSWORD-LOGIN";
const ENTER_WHEN_LOGIN = "ENTER-WHEN-LOGIN";

let initialState = {
  personInfoLogIn: [{ id: 2, email: "denis.kuchko@mail.ru", password: "111" }],
  newEmailTouchLogIn: "",
  newPasswordTouchLogIn: "",
};
const logInPersonInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOUCH_EMAIL_LOG_IN:
      return {
        ...state,
        newEmailTouchLogIn: action.newTextEmailLogIn,
      };
    case TOUCH_PASSWORD_LOG_IN:
      return {
        ...state,
        newPasswordTouchLogIn: action.newTextPasswordLogIn,
      };

    case ENTER_WHEN_LOGIN:
      let newPersonInfo = {
        id: 3,
        email: state.newEmailTouchLogIn,
        password: state.newPasswordTouchLogIn,
      };
      return {
        ...state,
        personInfoLogIn: [...state.personInfoLogIn, newPersonInfo],
        newEmailTouchLogIn: "",
        newPasswordTouchLogIn: "",
      };
    default:
      return state;
  }
};
export const addLogInEmailCreator = (text) => ({
  type: TOUCH_EMAIL_LOG_IN,
  newTextEmailLogIn: text,
});
export const addLogInPasswordCreator = (text) => ({
  type: TOUCH_PASSWORD_LOG_IN,
  newTextPasswordLogIn: text,
});
export const checkInfologInCreator = () => ({
  type: ENTER_WHEN_LOGIN,
});
export default logInPersonInfoReducer;
