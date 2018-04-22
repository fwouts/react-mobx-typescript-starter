import { configure, observable } from "mobx";
import { HomePageViewModel } from "./viewmodels/home";

configure({
  enforceActions: true,
});

export class AppController {
  @observable public viewModel: AppViewModel;

  constructor() {
    this.viewModel = new HomePageViewModel();
  }
}

export type AppViewModel = HomePageViewModel;
