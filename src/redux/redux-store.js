import { combineReducers, createStore } from "redux";
import logUpPersonInfoReducer from "../redux/loginUp-reducer";
import logInPersonInfoReducer from "../redux/logIn-reducer";
import mainPageReducers from "./mainPage-reducer";
import profilePageReducers from "./profilePage-reducer";
import authReduser from "./auth-reducer";

let reducers = combineReducers({
  logUpInfo: logUpPersonInfoReducer,
  logInInfo: logInPersonInfoReducer,
  mainPage: mainPageReducers,
  profilePage: profilePageReducers,
  auth: authReduser,
});
let store = createStore(reducers);
window.store = store;

export default store;
