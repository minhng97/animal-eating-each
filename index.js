var Dog = require('./Dog');
var Cat = require('./Cat');


var dog = new Dog('Tom');
dog.sayHi();
var cat1 = new Cat('Jerry');

dog.eat(cat1);
console.log(dog);