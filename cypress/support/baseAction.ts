export default class BaseAction {
  protected userDropdown: string;

  constructor() {
    if (this.constructor === BaseAction) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.userDropdown = "button.dropdown--button";

  }

}