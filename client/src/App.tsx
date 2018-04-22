import {observer} from "mobx-react";
import * as React from "react";
import { AppController } from "./appcontroller";
import { HomePage } from "./pages/HomePage";

@observer
class App extends React.Component<{appController: AppController}> {
  public render() {
    switch (this.props.appController.viewModel.kind) {
      case "home":
        return <HomePage viewModel={this.props.appController.viewModel} />;
      default:
        // TODO: Consider using assert-never for compile-time checking instead.
        throw new Error(`Unknown state: ${JSON.stringify(this.props.appController.viewModel)}.`);
    }
  }
}

export default App;
