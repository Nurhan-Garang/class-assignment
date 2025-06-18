class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log('hi ,my name is'+ ' ' +this.name + ' '+'and iam '+ ' '+ this.age + ' '+ ' years old');
    }
}
let Person3=new person("NURHAN",21);
Person3.introduce();

class Student extends person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent constructor
    this.grade = grade;
  }

  introduce(){
    console.log('Hi, I`m ' + ' ' + this.name + ' ' + 'a student in'+ ' ' +this.grade);
  }
}
let Person4=new Student("NURHAN",21,"10th Grade");
Person4.introduce();


class Teacher extends person {
  constructor(name, age, subject) {
    super(name, age); // Call the parent constructor
    this.subject = subject;
  }

  introduce() {
    console.log( 'Hello, Im '+ ' '+this.name +' ' + 'and I teach'+ ' ' + this.subject );
  }
}
let person5= new Teacher("NURHAN",21,"Math");
person5.introduce();