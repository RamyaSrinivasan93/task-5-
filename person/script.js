class Person {
    constructor(firstName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('Arunram', 28, 'India', 'tirunelveli')
  
  console.log(person1)