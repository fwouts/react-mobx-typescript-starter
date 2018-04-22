import { action, observable } from "mobx";

export class HomePageViewModel {
  public readonly kind = "home";

  @observable public message = "Hello, World!";

  @action
  public updateMessage(message: string) {
    this.message = message;
  }
}
