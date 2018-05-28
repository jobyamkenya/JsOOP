//create an object

var userOne = {
	//inside the object you can add object properties
	email :'machoka@gmail.com',
	name : 'machoka',
	// you can also add functions or methods
	login(){
		if(userOne.email === "machoka@gmail.com" && userOne.name === "machoka"){
			console.log("Welcome " + this.name);
		}else{
			console.log("Please Register");
		}
	},

	logout(){
		
			console.log("Bye Now... ");
	}

};

userOne.name = "Machogu";
userOne.email = "machogu@gmail.com";

console.log('Name: '+ userOne.name);
console.log('email: '+ userOne.email);