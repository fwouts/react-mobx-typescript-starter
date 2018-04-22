import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { AppController } from "./appcontroller";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const appController = new AppController();
  ReactDOM.render(<App appController={appController} />, div);
});
