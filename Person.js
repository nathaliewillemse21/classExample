class Person {
  static count = 0;
  constructor() {
    // this.firstName = 'John'
    // this.lastName = 'Peter' or
    this.firstName = 'Please provide your first name';
    this.lastName = 'Please provide your last name';
    this.age = 0;
    Person.count += 1;
  }
  set FirstName(value) {0
    this.firstName = value;
  }
  get FirstName() {
    return this.firstName;
  }
  set LastName(value) {
    this.lastName = value;
  }
  get LastName() {
    return this.lastName;
  }
  set Age(value) {
    this.age = value;
  }
  get Age() {
    return this.age;
  }
  // Display Method
  display() {
    console.log(`
        Person ID:${Person.count}
        First name:${this.FirstName}
        Last name:${this.LastName}
        Age:${this.Age}`);
  }
}
export {
    Person
}
