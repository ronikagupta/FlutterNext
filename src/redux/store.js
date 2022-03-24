import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReduser from "./reduser";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [reduxThunk];

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
