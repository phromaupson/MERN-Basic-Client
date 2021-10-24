import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>
  document.getElementById("root")
);
