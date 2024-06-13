import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import BaseLayout from "./components/layout/BaseLayout";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BaseLayout />
  </Provider>,
);
