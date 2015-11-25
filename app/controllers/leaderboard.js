import Ember from 'ember';

export default Ember.Controller.extend({
    // setup our query params
  queryParams: ["page", "perPage", "title", "actor", "director", "rating_from", "rating_to"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 20,
  title: "",
  actor: "",
  director: "",
  rating_from: "",
  rating_to: ""
});
