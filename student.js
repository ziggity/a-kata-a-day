class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class Bootcamp {
    constructor(name, level, students = []) {
      this.name = name;
      this.level = level;
      this.students = students;
    }
     registerStudent(studentToRegister) {
      if (Object.keys(studentToRegister).length === 0) {
        console.log("Please enter valid name and email");
        return false;
      } else if (!studentToRegister.email) {
        console.log("Please enter valid email");
        return false;
      } else if (!studentToRegister.name) {
        console.log("Please enter valid name");
        return false;
      } else {
        console.log("testing student");
        //use array method find for faster - readable check
        for (const student of this.students) {
          if (student.email === studentToRegister.email) {
            console.log("student email already reg: ", student.email);
            console.log("sorry this student email is already registered");
            return false;
          }
        }
        this.students.push(studentToRegister);
        console.log(`${studentToRegister.name} successfully registered`);
        return true;
      }
    }
  
    getInfo() {
      return console.log(`Get INFO: ${this.name} bootcamp, and the level is:${this.level}`);
    }
    
    removeStudent(email){
      this.students = this.students.filter(student => student.email !== email);
      console.log(` student with email: ${email.email} removed successfully`);
      }
  
    listStudents() {
      if (this.students.length === 0) {
        console.log(`No students are registered to the ${this.name} bootcamp.`);
        return false;
      } else {
        for (const student of this.students) {
          console.log(
            `The students registered in students Array are: ${student.name} and their email is: ${student.email}`
          );
          return true;
        }
      }
    }
  }
  
  testStudent = new Student("Bugs Bunny", "bugs@bunny.com");
  
  
  console.log(testStudent);
  if (
    testStudent.name === "Bugs Bunny" &&
    testStudent.email === "bugs@bunny.com"
  ) {
    console.log("TASK 1: PASS");
  }
  
  reactBootcamp = new Bootcamp("React", "Advanced");
  console.log(reactBootcamp);
  if (
    reactBootcamp.name === "React" &&
    reactBootcamp.level === "Advanced" &&
    Array.isArray(reactBootcamp.students) &&
    reactBootcamp.students.length === 0
  ) {
    console.log("TASK 2: PASS");
  }
  
  const runTest = (bootcamp, student) => {
      const attemptOne = bootcamp.registerStudent(student);
      const attemptTwo = bootcamp.registerStudent(student);
      const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
      if ( attemptOne && !attemptTwo && !attemptThree) {
          console.log("TASK 3: PASS");
      }
  
      bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
      if (bootcamp.listStudents()) {
          console.log("TASK 4: PASS 1/2");
      }
      bootcamp.students = [];
      if (!bootcamp.listStudents()) {
          console.log("TASK 4: PASS 2/2");
      }
  };
  
  reactBootcamp.getInfo();
  reactBootcamp.registerStudent(testStudent);
  reactBootcamp.listStudents();
  reactBootcamp.removeStudent(testStudent.email);
  reactBootcamp.listStudents();
  runTest(reactBootcamp, testStudent)
  