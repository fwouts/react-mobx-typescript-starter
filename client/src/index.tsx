import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { AppController } from "./appcontroller";
import "./index.css";

const appController = new AppController();

ReactDOM.render(<App appController={appController} />, document.getElementById("root") as HTMLElement);
