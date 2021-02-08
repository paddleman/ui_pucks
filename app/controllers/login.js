import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {

@tracked errorMessage
@service session  //session service provided by ember-simple-auth


@action
async authenticateUser(attrs) {
  try {
  await this.session.authenticate('authenticator:jwt', {
    email: attrs.email,
    password: attrs.password
    });
    this.transitionToRoute('index');
  } 
  catch(error) {
    this.errorMessage = error.error || error; 
  }
  
}

}
