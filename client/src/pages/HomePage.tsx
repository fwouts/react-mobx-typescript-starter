import { observer } from "mobx-react";
import * as React from "react";
import { HomePageViewModel } from "../viewmodels/home";

@observer
export class HomePage extends React.Component<{viewModel: HomePageViewModel}> {
  public render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.viewModel.name}
          onChange={this.handleInputChange}
        />
        <button
          onClick={this.props.viewModel.sayHello}
        >
          Say hello
        </button>
      </div>
    );
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.viewModel.updateName(event.target.value);
  }
}
