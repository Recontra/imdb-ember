import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params) {
    return this.findPaged('movie', params);
  },
  actions: {
    searchMovies: function() {
      this.refresh();
    }
  }
});
