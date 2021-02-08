import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {

@tracked email
@tracked password

@action
submitCreds(ev) {
  ev.preventDefault();

  this.args.loginUser({
    email: this.email,
    password: this.password  
  })

  this.email = ''
  this.password = ''
}

}


