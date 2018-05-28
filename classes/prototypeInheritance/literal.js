// create a function constructor called Person
function Person(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.online = false;
}

//Now create methods and remember methods go outside the class constructor or constructor function
// here we will use the prototype keyword toattach our methods to our function constructor Person


//login method
Person.prototype.login = function(){
    this. online = true;
    console.log(this.firstName, ".......logged in");
}

//logout method
Person.prototype.logout = function(){
    this. online = false;
    console.log(this.firstName, ".......logged Out");
}

//create instances

student1 = new Person('Nelly', 'Mochogu', 'nelly@gmail.com',1234);
student2 = new Person('futado', 'choyo', 'choyo@gmail.com',4321);

console.log(student1);
console.log(student2);

student1.login();
student2.login();
student1.logout();
