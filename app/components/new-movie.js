import Ember from 'ember';

export default Ember.Component.extend({
  title: "",
  mesage: "",
  loading: false,
  editing: Ember.computed('movie.imdbId', function() {
    if (typeof(this.get('movie.imdbId')) === 'undefined') {
      return false;
    }

    return true;
  }),
  buttonText: Ember.computed('movie.imdbId', function() {
    if (typeof(this.get('movie.imdbId')) === 'undefined') {
      return "Add";
    }

    return "Change";
  }),
  actions: {
    createMovie: function(title) {
      var self = this,
          movie = this.get('movie');
      this.set('loading', true);
      movie.set('title', title);
      movie.save().then(function() {
        self.set('title', null);
        self.set('message', "Movie was found and added to list. You can change it or delete it");
        self.set('loading', false);
      }, function() {
        self.set('message', "Movie was was not added");
        self.set('loading', false);
      });
    },
    deleteMovie: function(movie) {
      var self = this,
          movie = this.get('movie');

      movie.destroyRecord().then(function() {
        self.sendAction('redirect');
      },function() {
        self.set('message', "Movie was was not deleted");
      });
    }
  }
});
