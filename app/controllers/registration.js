import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';



export default class RegistrationController extends Controller {


  @action
  async registerUser(attrs) {
    // console.log(attrs);
    let user = this.store.createRecord('user', attrs);

    let errs = {}
    try {
      await user.save();
      this.transitionToRoute('index');
    } 
    catch(e) {
      //this.model = attrs; // keeps entered values on error
      this.set('errs', user.errors);
    }
  }

  @action
  clearErrors() {
    this.set('errs', {});
  }


}
