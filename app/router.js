import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leaderboard');
  this.route('movies', function() {
    this.route('new');
    this.route('edit', {path: ':movie_id/edit'});
  });
  this.route('login');
  this.route('register');
});

export default Router;
