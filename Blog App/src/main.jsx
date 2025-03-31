import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider, useDispatch } from "react-redux";
import store from "./app/store";
import { fetchUsers } from "./features/users/userSlice";

store.dispatch(fetchUsers());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
