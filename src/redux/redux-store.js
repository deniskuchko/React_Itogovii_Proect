import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import mainPageReducers from "./mainPage-reducer";
import profilePageReducers from "./profilePage-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reducer";
import myArticlesReducer from "./myArticles-reducer";
import postPageReducers from "./post-reducer";

let reducers = combineReducers({
  mainPage: mainPageReducers,
  profilePage: profilePageReducers,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
  myArticles: myArticlesReducer,
  post: postPageReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
window.store = store;

export default store;
