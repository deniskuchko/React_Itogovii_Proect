import { combineReducers, createStore, applyMiddleware } from "redux";
import mainPageReducers from "./mainPage-reducer";
import profilePageReducers from "./profilePage-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reducer";
import myArticlesReducer from "./myArticles-reducer";

let reducers = combineReducers({
  mainPage: mainPageReducers,
  profilePage: profilePageReducers,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
  myArticles: myArticlesReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
