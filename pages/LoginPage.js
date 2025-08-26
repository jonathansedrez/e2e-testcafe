import { Selector } from "testcafe";

class Page {
  constructor() {
    this.firstName = Selector("#username");
    this.password = Selector("#password");
    this.submitButton = Selector("button").withText("Login");
    this.flashContainer = Selector("#flash");
  }
}

export default new Page();
