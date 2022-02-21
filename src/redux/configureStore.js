import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/userReducer";
import Post from "./modules/postReducer";
import Comment from "./modules/commentReducer";
<<<<<<< HEAD
import Image from "./modules/imageReducer";
import DM from "./modules/dmReducer";
=======
import Like from './modules/likeReducer'

>>>>>>> 3adcf8a88fc6fdfacaf2bd1ffc126a1ff7b06318

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post: Post,
  comment: Comment,
<<<<<<< HEAD
  image: Image,
  dm: DM,
=======
  like: Like,
>>>>>>> 3adcf8a88fc6fdfacaf2bd1ffc126a1ff7b06318
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
