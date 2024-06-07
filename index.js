import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudents(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
do {
    const response = await inquirer.prompt({
        name: 'userInput',
        type: 'list',
        message: 'Please Select an option : ',
        choices: ['Staff', 'Student', 'Exit'],
    });
    if (response.userInput === 'Staff') {
        console.log("You Approach the stadd room.Feel free to ask any question!");
    }
    else if (response.userInput === 'Student') {
        const response = await inquirer.prompt({
            name: 'userInput',
            type: 'input',
            message: 'Please Enter a Student Name : ',
        });
        const findStudentIfExists = (name) => person.students.find(stu => stu.name === name);
        if (findStudentIfExists(response.userInput)) {
            console.log(`Hello My name is : ${response.userInput}.Nice to meet you.`);
            console.log(`${response.userInput} Found`);
            process.exit();
        }
        else {
            console.log('Student Not Found');
        }
        if (isNaN(response.userInput)) {
            const newStudent = new Student(response.userInput);
            person.addStudents(newStudent);
            console.log(`Student Registered Successfully : ${response.userInput}`);
            const studentNames = person.students.map(student => student.name).join(',');
            console.log(`Students Records are : ${studentNames}`);
        }
        else {
            console.log('Please Enter a Valid Name');
        }
    }
    else {
        console.log("You Successfully Exit the program");
        process.exit();
    }
} while (1 > 0);
{
}
