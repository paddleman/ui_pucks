import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationAdapter extends JSONAPIAdapter {

  host = 'http://localhost:4000';

  @service session;
  
  @tracked 'session.data.authenticated.token';

 
  get headers() {
    if (this.session.isAuthenticated) {
      return {
        'Authorization': `Bearer ${this.session.data.authenticated.token}`
      }
    }
    
    return {}
  }

  //as per the ESA docs
  // @computed('session.data.authenticated.token')
  // get headers() {
  //   let headers = {};
  //   if (this.session.isAuthenticated) {
  //     headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
  //   }
  //   
  //   return headers;
  // }

}


