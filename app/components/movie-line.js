import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  hideEditButton: Ember.computed('movie.autoImported', 'hideEdit', function() {
    var hide = this.get('hideEdit') || false;
    return this.get('movie.autoImported') || hide;
  })
});
