class Teacher{
    constructor(name, age, subjects){
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
}

const teacher1 = new Teacher("John Doe", 45, ["Math", "Science", "English"]);
console.log(teacher1);
const teacher2 = new Teacher("John Doe", 45, ["Math", "Science", "English"]);
console.log(teacher2);