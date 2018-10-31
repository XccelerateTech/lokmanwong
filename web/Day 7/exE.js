
class Person {
	constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
	info(){
  console.log("this person is called " + this.name + " and is " + this.age + "yeas old.")
}
}



  
  const person = new Person ({age: 44, name: 'Tom'})
  
  person.info();