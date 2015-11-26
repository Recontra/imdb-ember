import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user', {});
  },
  actions: {
    redirect: function() {
      this.transitionTo('leaderboard');
    }
  }
});
