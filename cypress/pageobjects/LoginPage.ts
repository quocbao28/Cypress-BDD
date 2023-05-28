import BaseAction from "../support/baseAction";

export default class LoginPage extends BaseAction {
  public emailInput: string;

  public passwordInput: string;

  public generalButton: string;

  constructor() {
    super();
    this.emailInput = "input[name='email']";
    this.passwordInput = "input[name='password']";
    this.generalButton = ".reejig-btn-primary";
  }

};
