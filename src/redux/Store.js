// Import necessary functions and libraries from Redux
import { createStore, combineReducers } from "redux";

import TodoReducer from "./reducers/TodoReducer.js";

// Combine multiple reducers into a single rootReducer using combineReducers
const rootReducer = combineReducers({ todos:TodoReducer, });

// Create the Redux store by passing the rootReducer to the createStore function
const store = createStore(rootReducer);

export default store;
