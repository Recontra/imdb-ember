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
    },
    sort: function(sortColumn) {
      var lastSort = this.get('sort'),
          lastDirection = this.get('direction'),
          newDirection;

      if (sortColumn === lastSort) {
        newDirection = lastDirection === 'desc' ? 'asc' : 'desc';
      } else {
        newDirection = 'asc';
      }

      this.set('sort', sortColumn);
      this.set('direction', newDirection);
      this.sendAction('searchMovies');
    }
  }
});
