import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirect: function() {
      this.transitionTo('leaderboard');
    }
  }
});
