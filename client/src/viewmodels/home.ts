import { action, observable } from "mobx";
import * as client from "../client";

export class HomePageViewModel {
  public readonly kind = "home";

  @observable public name = "";

  @action
  public updateName = (name: string) => {
    this.name = name;
  }

  @action
  public sayHello = async () => {
    const response = await client.sayHello({
      name: this.name,
    });
    switch (response.kind) {
      case "success":
        alert(response.data.english);
        break;
      case "failure":
      default:
        alert(response.data);
    }
  }
}
