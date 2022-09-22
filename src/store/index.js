import { combineReducers } from "redux";

import loaderReducer from "./reducers/loader";

const allReducers = combineReducers({
  loader: loaderReducer
});

export default allReducers;