var Backbone = require('backbone');
var Person = require('./person').Person;  // to identify the object model you want to reference

var PersonCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('collection was initilized');
  },
  model: Person
});

module.exports = {
  'PersonCollection': PersonCollection
};
