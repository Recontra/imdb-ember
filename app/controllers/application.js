import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  userEmail: Ember.computed('session', function() {
    var userData = this.get('session.session.content.authenticated.user');
    if (userData)
      return userData.email;
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
