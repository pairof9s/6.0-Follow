var Backbone = require('backbone');
var models = require('./models/person');
var collections = require('./models/person-collection');


/*
* Backbone models
*/

var jane = new models.Person({
  'name': 'Jane',
  'gender': 'female',
  'type': 'burger',
  'employed': false,
});
console.log(jane.get('employed'));

var jason = new models.Person({
  'name': 'Jason',
  'gender': 'male',
  'type': 'deli sandwich',
  'employed': true
});
console.log(jason.get('name'));

jane.makeSandwich();
jason.makeSandwich();


/*
*  Backbone Collections
*/

var sandwichMakers = new collections.PersonCollection([
  {'name': 'Jane', 'gender': 'female', 'type': 'burger'},
  {'name': 'Jason', 'gender': 'male', 'type': 'deli sandwich'}
]);
console.log('sandwichMakers', sandwichMakers);

sandwichMakers.each(function(person){
  person.sayName();
});

/*
 * Codepen Challenge
 */
// var Team = Backbone.Model.extend({
//   defaults: {
//     'teamName': 'Dodgers',
//     'sport': 'Baseball'
//   }
// });
//
// var panthers = new Team({'teamName': "Panthers"});
// console.log('teamName: ' + panthers.get('teamName'));
// console.log('teamName: ' + panthers.get('sport'));
//
// panthers.set({'sport': 'Football', 'winners': true});
//
// console.log('teamName: ' + panthers.get('sport'));
// console.log('winners: ' + panthers.get('winners'));


/*
 * Backbone Model Method Example
 */
 // var Character = Backbone.Model.extend({
 //   attack: function(enemy){
 //     var attackForce = this.get('force');
 //     enemy.takeDamage(attackForce);
 //   },
 //   takeDamage: function(damageAmount){
 //     var currentHealth = this.get('health');
 //     this.set('health', currentHealth - damageAmount);
 //   }
 // });
 //
 // var Hero = Character.extend({
 //
 // });
 //
 // var Enemy = Character.extend({
 //
 // });
 //
 // var superman = new Hero({'health': 10, 'force': 4});
 // var lex = new Enemy({'health': 10, 'force': 3});
 //
 // console.log('superman health', superman.get('health'));
 // console.log('lex health', lex.get('health'));
 //
 // superman.attack(lex);
 //
 // console.log('superman health', superman.get('health'));
 // console.log('lex health', lex.get('health'));
 //
 // lex.attack(superman);
 //
 // console.log('superman health', superman.get('health'));
 // console.log('lex health', lex.get('health'));
