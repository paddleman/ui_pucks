import EmberRouter from '@ember/routing/router';
import config from 'ui-pucks/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('registration');
  this.route('login');
});
