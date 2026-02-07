// Overall task ki requirement k liye

// sab buttons select karo
const buttons = document.querySelectorAll(".task-btn, .final-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const taskName = btn.dataset.task;
    // sirf wahi task run hoga jis py click holga
    switch (taskName) {
      case "task1_1":
        task1_1();
        break;

      case "task1_2":
        task1_2();
        break;

      case "task1_3":
        task1_3();
        break;
      //////////////////////////////////////////////
      case "task2_1":
        task2_1();
        break;

      case "task2_2":
        task2_2();
        break;
      /////////////////////////////////////////////
      case "task3_1":
        task3_1();
        break;

      case "task3_2":
        task3_2();
        break;

      case "task3_3":
        task3_3();
        break;
      ////////////////////////////////////////////
      case "task4_1":
        task4_1();
        break;

      case "task4_2":
        task4_2();
        break;

      case "task4_3":
        task4_3();
        break;
      ///////////////////////////////////////////
      case "final_challenge":
        finalChallenge();
        break;

      default:
        console.log("Task not found");
    }
  });
});

// Section 1: var vs let vs const (Deep Understanding)
/////////////////////////////////////////////////////
// Task 1.1
/////////////////////////////////////////////////////
function task1_1() {
  console.clear()
  console.log("==================== Task 1.1 ====================");
  console.log("block sy uper wala console = " + name1);
  {
    var name1 = "Ammad";
    console.log("Block k andr = " + name1);
    name1 = "Ammad Raza";
    console.log("Block k andr value change hony k baad = " + name1);
  }
  console.log("Block k nichy wala console = " + name1);

  /////// let wala section ////////////
  try {
    console.log("Let k block sy pehly = " + age1);
  } catch (e) {
    console.log(
      "Let age1 abhi hoist hogya hai likn TDZ mei hai = ReferenceError",
    );
  }

  {
    let age1 = 1000;
    console.log("Block k andr " + age1);
    age1 = "twenty-eight";
    console.log(
      "let humy variale ki value ya datatype change krny sy nhi rukta = " +
        age1,
    );
  }

  try {
    console.log("My real age is " + age1);
  } catch (e) {
    console.log("let block scope hota hai block bhr let hai hi nhi");
  }

  //////////// const wala section ///////////////
  try {
    console.log(fatherNAme);
  } catch (e) {
    console.log(
      "Const fatherName abhi hoist hogya hai likn TDZ mei hai = ReferenceError",
    );
  }

  {
    const fatherNAme = "Ghulam Fareed";
    console.log(fatherNAme);
    try {
      fatherNAme = "Fareed";
    } catch (e) {
      console.log("Const k variable mei naa tw value change hoti na datatype");
    }
  }

  try {
    console.log(fatherNAme);
  } catch (e) {
    console.log("Block k bhr const exist hi nhi krta");
  }
}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task1_2() {
  console.clear()
  console.log("==================== Task 1.2 ====================");
  {
    var varDeclare = "Lahore";
    console.log("Variable declared with var Output =>>> " + varDeclare);
    var varDeclare = "Karachi";
    console.log("After redeclared " + varDeclare);
  }
  {
    try {
      eval(`
      let myName = "Ammad";
      console.log("variable declared first-time using let Output = " + myName);
      let myName = "Ammad Raza";
      console.log("Variable redeclared with the same name 'myName' let see waht happen " +myName,
      );
      `);
    } catch (e) {
      console.log("error msg =>>> " + e.message);
    }
  }
  {
    try {
      const constVariable = "Declared first time";
      console.log(constVariable);
      eval(`
        let indirect = {constVariable: modifying a const value indirectly in (object or array)};
        console.log(indirect.constVariable);
        `);
    } catch (e) {
      console.log(
        `The const variable cannot be redeclared even indirectly: ${e.message}`,
      );
    }
  }
}
/////////////////////////////////////////////////////
// Task 1.3
/////////////////////////////////////////////////////
function task1_3() {
  console.clear()
  console.log(
    "==================== Task 1.3 – Loop Behavior Test ====================",
  );
  let loopVar = [1, 2, 3, 4, 5];

  //("======== Using VAR ========");
  for (var a = 0; a < loopVar.length; a++) {
    setTimeout(
      (a) => {
        console.log(`Current iteration count in VAR is =>>> ${loopVar[a]}`);
      },
      100,
      a,
    );
  }
  //("======== Using LET ========");
  for (let j = 0; j < loopVar.length; j++) {
    setTimeout(() => {
      console.log("Current iteration count in LET is =>>> " + loopVar[j]);
    }, 200);
  }
  //("======== Using CONST ========");
  for (const k of loopVar) {
    setTimeout(() => {
      console.log("Current iteration count in CONST is =>>> " + k);
    }, 300);
  }
  //("======== Final log after ALL delays ========");
  setTimeout(() => {
    console.log("All delay log completed");
  }, 400);
}
/////////////////////////////////////////////////////
// Task 2.1
/////////////////////////////////////////////////////
function task2_1() {
  console.clear()
  console.log(
    "==================== Task 2.1 – Dynamic Message Generator ====================",
  );
  function dmg(userName, course, percentage) {
    return `Hi ${userName} \n You have successfully completed ${percentage} of the course: ${course} \n Keep going you are doing great!`;
  }
  let name = prompt("Enter your name");
  let course = prompt("Enter course name");
  let percents = +prompt("Enter completion percentage");
  console.log(dmg(name, course, percents));
}
/////////////////////////////////////////////////////
// Task 2.2
/////////////////////////////////////////////////////
function task2_2() {
  console.clear()
  console.log(
    "==================== Task 2.2 – Conditional Templates ====================",
  );
  function gradingLogic() {
    const studentname = prompt("Enter your name");
    const score = +prompt("Enter your score");
    const status = score >= 60 ? "PASS" : "FAIL";
    let grade;
    let massage = `Congratulations! ${studentname} Keep pushing forward`;
    if (isNaN(score) || score < 0 || score > 100) {
      console.log("Something went wrong, please enter a valid number");
      return;
    } else if (score >= 90) {
      grade = "A";
    } else if (score >= 75) {
      grade = "B";
    } else if (score >= 60) {
      grade = "C";
    } else {
      grade = "No Grade";
      massage = "Needs improvement. Don't give up";
    }
    console.log(
      `Student Name: ${studentname} \n Score: ${score} \n\n Status: ${status} \n Grade: ${grade} \n\n ${massage}`,
    );
  }
  gradingLogic();
}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task3_1() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task3_2() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task3_3() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task4_1() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task4_2() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task4_3() {}
/////////////////////////////////////////////////////
// Run Final Chalenge
/////////////////////////////////////////////////////
function final_challenge() {}
