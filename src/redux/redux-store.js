import { combineReducers, createStore } from "redux";
import logUpPersonInfoReducer from "../redux/loginUp-reducer";

let reducers = combineReducers({
  logUpInfo: logUpPersonInfoReducer,
});
let store = createStore(reducers);
export default store;
