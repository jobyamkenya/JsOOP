//we create a constructor called myProperty
//we will give myProperty the following  properties Name, category, location
function MyProperty (name, category, location) {
    this.name = name;
    this.category = category;
    this.location = location;
}

// we can add a  methods to  create() a property

MyProperty.prototype.create = function() {
	console.log(this.name, 'has been created');
}

// now that our object works and is able to create multiple instances we can proceed to inheriatnce
// remember we are using rw javascript prototype
// create a constructor called aparment that inherits everything from MyProperty
function Apartment(...args){
	//call the MyProperty object here and use the apply key and this to collect all the arguments in an array
	
	MyProperty.apply(this, args);
	this.rooms = 4;

}

//now we can inherit the methods of MyProperty by attaching our Apartment prototype to the newly pulled in MyPrototype.ptototype

Apartment.prototype = Object.create(MyProperty.prototype);
//here you can add more methods that will be associated with Apartment constructor
//E.g 
MyProperty.prototype.deleteApartment = function() {
	console.log('You will be flagged down');
}

// create a few instances
var zambiaHouse = new MyProperty('BikoFlats', 'Rental', 'Ngong'); 
var vetHouse = new MyProperty('ToyFlats', 'Rental', 'Ngong');
var bulHouse = new MyProperty('VeveBungalo', 'Bungalow', 'BulBUl');
var apartments = new Apartment('XoxoMansion', 'Mansionette', 'Mogas');

//call our objects to console 
console.log(zambiaHouse);
vetHouse.create();
zambiaHouse.create();

console.log(apartments);


