import React from "react";
import ReactDOM from "react-dom/client";
//import { createMemoryHistory, createBrowserHistory } from 'history';
import "./index.css";
import App from "./App";

interface ExtraProps {}

const mount = (
  el: HTMLElement /* { onSignIn, onNavigate, defaultHistory, initialPath  }: ExtraProps*/
) => {
  /* const history =
      defaultHistory ||
      createMemoryHistory({
        initialEntries: [initialPath],
      });
  
    if (onNavigate) {
      history.listen(onNavigate);
    } */

  const root = ReactDOM.createRoot(el);
  root.render(<App /* onSignIn={onSignIn} history={history} */ />);

  /* return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  }; */
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root") as HTMLElement;

  if (devRoot) {
    mount(devRoot /* , { defaultHistory: createBrowserHistory() } */);
  }
}

export { mount };
