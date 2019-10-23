import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import trackerReducer from "./store/reducers/trackers";
import TrackerNav from "./navigation/TrackerNav";

const rootReducer = combineReducers({
  trackers: trackerReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <TrackerNav />
    </Provider>
  );
}
