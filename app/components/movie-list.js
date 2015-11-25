import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
  actions: {
    resetMovies: function() {
      this.set('titleParam', "");
      this.set('actorParam', "");
      this.set('directorParam', "");
      this.set('ratingFromParam', "");
      this.set('ratingToParam', "");
      this.sendAction('searchMovies');
    },
    searchMovies: function() {
      this.sendAction('searchMovies');
    }
  }
});
