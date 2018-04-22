import { observer } from "mobx-react";
import * as React from "react";
import { HomePageViewModel } from "../viewmodels/home";

@observer
export class HomePage extends React.Component<{viewModel: HomePageViewModel}> {
  public render() {
    return (
      <div>
        {this.props.viewModel.message}
      </div>
    );
  }
}
