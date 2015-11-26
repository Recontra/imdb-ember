import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      var self = this;
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).catch(function(reason) {
        self.set('errorMessage', "Username or password wrong");
      });
    }
  }
});
