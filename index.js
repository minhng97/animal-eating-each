var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog('Lu');
try {
	cat.eat(dog)
}
catch(error) {
	console.log('error: ', error)
}
