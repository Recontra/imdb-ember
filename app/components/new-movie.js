import Ember from 'ember';

export default Ember.Component.extend({
  title: "",
  mesage: "",
  loading: false,
  editing: Ember.computed('movie.imdbId', function() {
    if (typeof(this.get('movie.imdbId')) === 'undefined')
      return false;

    return true;
  }),
  buttonText: Ember.computed('movie.imdbId', function() {
    if (typeof(this.get('movie.imdbId')) === 'undefined')
      return "Add";

    return "Change";
  }),
  actions: {
    createMovie: function(title) {
      var self = this,
          movie = this.get('movie');
      this.set('loading', true);
      movie.set('title', title);
      movie.save().then(function(result) {
        self.set('title', null);
        self.set('message', "Movie was found and added to list. You can change it or delete it")
        this.set('loading', true);
      }, function(error) {
        console.log(movie.error);
        self.set('message', error.message);
        this.set('loading', true);
      });

    }
  }
});
