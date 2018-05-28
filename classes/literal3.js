//create an empty user class

class User{
  // inside the class create a constructor to help us create object instances
  constructor(name, email, score){
     //set constructor properties
     this.name = name;
     this.email = email;
     this.score = 0;

  }

  //class methods are written outside the constructor but inside the class
  login(){
      console.log(this.email, 'Welcome .......loggedIn');
      return this;
  }

  logout(){
        console.log(this.email, 'Bye Now........loggedOut');
        return this;
  }

  updateScore(){
  	this.score++
  	console.log(this.email, 'Score is Now', this.score);
  	return this;
  }
}

class Admin extends User{
	deleteUser(user){
      users = users.filter(u => {
      	return u.email != user.email
      });
	}
}

var userOne = new User('Nelson','nelson@gmail.com');
var userTwo = new User('machoka','machoka@gmail.com');
var userThree = new User('momo','momo@gmail.com');
var admin = new User('mekenzi','mekenzi@gmail.com');


//delete user
var users = [userOne, userTwo, userThree];

admin.deleteUser(userOne);

console.log(users);

