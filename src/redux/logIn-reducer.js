let initialState = {
  personInfo: [{ id: 1, email: "denis.kuchko@mail.ru", password: "111" }],
  newEmailTouch: "",
  newPasswordTouch: "",
};
const loginPersonInfo = (state = initialState, action) => {
  switch (action.type) {
    case "TOUCH-EMAIL":
      state.newEmailTouch = action.newTextEmail;
      return state;
    case "TOUCH-PASSWORD":
      state.newPasswordTouch = action.newTextPassword;
      return state;

    case "ENTER-WHEN-LOGIN":
      return state;
  }
};
