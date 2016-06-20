var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  defaults: {
    'name': 'Name',
    'gender': 'female',
    'hair': 'brown',
    'employed': true,
    'birthday': new Date('02/10/1965')
  },

  initialize: function(){
    console.log('New person born');
  },

  makeSandwich: function(){
    console.log('Made you a ' + this.get('type'));
  },

  sayName: function(){
    console.log('My name is ' + this.get('name'));
  }
});

module.exports = {
  'Person': Person
};
