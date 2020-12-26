import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';



export default class RegistrationController extends Controller {

  @tracked errs = {}

  @action
  async registerUser(attrs) {
    // console.log(attrs);
    let user = this.store.createRecord('user', attrs);

    try {
      await user.save();
      this.transitionToRoute('index');
    } 
    catch(errors) {
      this.errs = user.errors
    }
  }

  @action
  cancelForm(){
    this.errs = {}
    this.transitionToRoute('index');
  }

}
