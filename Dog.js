var chalk = require('chalk')
function Dog(name){
	this.name = name;
}
Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
Dog.prototype.sayHi = function() {
	console.log('Hi i am ' + chalk.red(this.name))
	};
module.exports = Dog;