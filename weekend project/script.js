// 1 Base class
class Pet {
  constructor(name, age, type, sound) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.sound = sound;
    this.#adoptionStatus = false; 
  }

  #adoptionStatus;

  makeSound() {
    console.log(this.name + ' ' + 'says:' + ' ' +this.sound);
  }

  getDetails() {
    return this.name + ' '+ 'is a'+ ' ' + this.age+ ' ' +'-year-old'+ ' ' +this.type;
  }

  getAdoptionStatus() {
    return this.#adoptionStatus ? "Adopted" : "Available";
  }

  adopt() {
    this.#adoptionStatus = true;
  }
}
let pet = new Pet("Snow", 2, "Rabbit", "Squeak!");

pet.makeSound();                   
console.log(pet.getDetails());    
console.log(pet.getAdoptionStatus()); 
pet.adopt();                      
console.log(pet.getAdoptionStatus()); 


// subclass
class Dog extends Pet {
  constructor(name, age) {
    super(name, age, "Dog", "Woof!");
  }

  makeSound() {
    console.log(this.name+ ' '+ 'barks: Woof woof!');
  }

  fetchBall() {
    console.log(this.name + ' ' + 'is fetching the ball!');
  }
}
let rex = new Dog("Rex", 3);

rex.makeSound();               
console.log(rex.getDetails()); 
rex.fetchBall();         

class Cat extends Pet {
  constructor(name, age) {
    super(name, age, "Cat", "Meow!");
  }

  makeSound() {
    console.log(this.name +' '+  'meows softly.');
  }

  climbTree() {
    console.log(this.name + 'climbs the tree gracefully.');
  }
}
let fluffy = new Cat("Fluffy", 2);

fluffy.makeSound();          
console.log(fluffy.getDetails());
fluffy.climbTree();              

// class stuff
class Staff {
  constructor(name) {
    this.name = name;
  }

  performDuty() {
    throw new Error("performDuty() must be implemented in the child class.");
  }
}

// subclass
class Vet extends Staff {
  performDuty() {
    console.log(this.name + 'is giving vaccines and checking health.');
  }
}

class Trainer extends Staff {
  performDuty() {
    console.log(this.name +' '+ 'is training pets with commands.');
  } 
}

// Encapsulation
let pet1 = new Dog("Rex", 3);
let pet2 = new Cat("Fluffy", 2);
let staff1 = new Vet("Dr. Jane");
let staff2 = new Trainer("Ali");

const centerMembers = [pet1, pet2, staff1, staff2];

centerMembers.forEach(member => {
  if (member instanceof Pet) {
    member.makeSound();
  } else if (member instanceof Staff) {
    member.performDuty();
  }
});
