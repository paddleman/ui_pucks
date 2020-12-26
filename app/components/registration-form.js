import Component from '@glimmer/component';
import { tracked  } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class RegistrationFormComponent extends Component {

  @tracked email;
  @tracked username;
  @tracked password;
  @tracked passwordConfirmation;

  @action
  submitUser(ev) {
    ev.preventDefault();
  
    this.args.registerUser({
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }) 
  }

  @action
  fireCancel() {
    this.args.cancelForm();    
  }

    
}

