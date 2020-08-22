const TOUCH_NAME = "TOUCH-NAME";
const TOUCH_EMAIL = "TOUCH-EMAIL";
const TOUCH_PASSWORD = "TOUCH-PASSWORD";
const TOUCH_ENTER_LOGUP = "TOUCH-ENTER-LOGUP";

let initialState = {
  personInfo: [
    {
      id: 1,
      name: "denis",
      email: "denis.kuchko@mail.ru",
      password: "111",
    },
  ],
  newNameTouch: "",
  newEmailTouch: "",
  newPasswordTouch: "",
};
const logUpPersonInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOUCH_NAME:
      return { ...state, newNameTouch: action.newTextName };

    case TOUCH_EMAIL:
      return { ...state, newEmailTouch: action.newTextEmail };

    case TOUCH_PASSWORD:
      return { ...state, newPasswordTouch: action.newTextPassword };

    case TOUCH_ENTER_LOGUP: {
      let newPersonInfo = {
        id: 2,
        name: state.newNameTouch,
        email: state.newEmailTouch,
        password: state.newPasswordTouch,
      };
      return {
        ...state,
        personInfo: [...state.personInfo, newPersonInfo],
        newNameTouch: "",
        newEmailTouch: "",
        newPasswordTouch: "",
      };
    }
    default:
      return state;
  }
};
export const addLogUpNameCreator = (text) => ({
  type: TOUCH_NAME,
  newTextName: text,
});
export const addLogUpEmailCreator = (text) => ({
  type: TOUCH_EMAIL,
  newTextEmail: text,
});
export const addLogUpPasswordCreator = (text) => ({
  type: TOUCH_PASSWORD,
  newTextPassword: text,
});
export const sendInfologUpCreator = () => ({
  type: TOUCH_ENTER_LOGUP,
});
export default logUpPersonInfoReducer;
