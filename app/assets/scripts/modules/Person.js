class Person{
	constructor(fullname,favColor){
		this.name = fullname;
		this.color = favColor;
	}
	
	greet(){
		console.log("Hi there my name is " + this.name + " my favorite color is " + this.color + ".")
	}
}
 
 // module.exports = Person;
 export default Person;