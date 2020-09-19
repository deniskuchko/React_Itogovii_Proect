import { getAuthUserData } from "./auth-reducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";

let initialState = {
  initialised: false,
};
const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialised: true,
      };
    default:
      return state;
  }
};

export const initialisedSuccess = () => ({
  type: INITIALISED_SUCCESS,
});

export const initialise = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initialisedSuccess);
    });
  };
};

export default appReduser;
