//create an object

var userOne = {
	//inside the object you can add object properties
	email: 'nelson@gmail.com',
	name: 'Nelson',
	// you can also add functions or methods
	login(){
		if(userOne.email === 'nelson@gmail.com' && this.name === 'Nelson'){
			console.log("Welcome " + this.name);
		}else{
			console.log("Please Register");
		}
	},

	logout(){
		
			console.log("Bye Now... ");
	}

};

//use the object as many times as posible
console.log(userOne.name);