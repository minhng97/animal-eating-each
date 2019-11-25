var Mouse = require('./Mouse');

function Cat(name){
	this.name = name;
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if (animal instanceof Mouse) {
		this.stomach.push(animal);
		console.log(this)
	} else {
		throw 'Cat can only eat Mouse!'
	}
}

module.exports = Cat;