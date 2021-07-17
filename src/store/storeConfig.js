import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middlewares;

if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger();
  middlewares = applyMiddleware(reduxThunk, loggerMiddleware);
} else {
  middlewares = applyMiddleware(reduxThunk);
}

export default function configureStore(preloadedState) {
  return createStore(reducers, preloadedState, composeEnhancers(middlewares));
}
