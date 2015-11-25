import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr(),
  rating: DS.attr('number'),
  year: DS.attr('number'),
  castMembers: DS.attr(),
  autoImported: DS.attr('boolean'),
  imdbId: DS.attr('string'),
  plot: DS.attr('string'),
  posterUrl: DS.attr('string'),
  votes: DS.attr('number'),
  castShort: Ember.computed('castMembers', function() {
    var members = this.get('castMembers');
    return members.slice(0,5);
  })
});
