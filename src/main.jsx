import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Redux Provider
import { store } from "./redux/store"; // Redux store
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* Redux Provider ke andar app ko wrap karein */}
    <App />
  </Provider>
);
