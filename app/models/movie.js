import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  //director: DS.attr('string'),
  rating: DS.attr('number'),
  year: DS.attr('number'),
  //castMembers: DS.attr('string'),
  autoImported: DS.attr('boolean'),
  imdbId: DS.attr('string'),
  plot: DS.attr('string'),
  posterUrl: DS.attr('string'),
  votes: DS.attr('number')
});
