import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import config from '../config/environment';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: config.loginPath,
  restore: function(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
        resolve(data);
    });
  }
});
