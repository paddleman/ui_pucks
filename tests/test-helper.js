import Application from 'ui-pucks/app';
import config from 'ui-pucks/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
