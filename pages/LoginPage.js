import { Selector } from "testcafe";

class Page {
  constructor() {
    this.firstName = Selector("#username");
    this.password = Selector("#password");
  }
}

export default new Page();
