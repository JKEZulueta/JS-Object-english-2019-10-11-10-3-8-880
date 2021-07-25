//1. Program and observe the following requirements:

var user = {
myFunc : function() {
  user.first_name = "John",
	console.log(user.first_name);
	user.last_name = "Mike",
	console.log(user.last_name);
	// or you can declare Peter here by user.first_name = "Peter";
	console.log(user.first_name = "Peter"); 
	delete user["first_name"];
	console.log(user.first_name); 

	}
}
user.myFunc();

//2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50.

var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var fruitCount = 0;
for(var cnt in fruit){
	fruitCount = fruitCount + fruit[cnt];
}
console.log(fruitCount);