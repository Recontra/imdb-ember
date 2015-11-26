import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    register: function() {
      var self = this,
          user = this.get('user'),
          pass = user.get('password');

      user.save().then(function() {
        console.log("Now try to auth");
        console.log(user.get('email'), pass);
        self.get('session').authenticate('authenticator:devise', user.get('email'), pass).catch(function(reason) {});
      }, function() {
        self.set('errorMessage', 'Something went wrong. Please check data');
      })
    }
  }
});
