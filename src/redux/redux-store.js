import { combineReducers, createStore } from "redux";
import logUpPersonInfoReducer from "../redux/loginUp-reducer";
import logInPersonInfoReducer from "../redux/logIn-reducer";
import usersReducers from "./mainPage-reducer";

let reducers = combineReducers({
  logUpInfo: logUpPersonInfoReducer,
  logInInfo: logInPersonInfoReducer,
  usersPage: usersReducers,
});
let store = createStore(reducers);
window.store = store;

export default store;
