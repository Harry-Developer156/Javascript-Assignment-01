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
  
}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task1_3() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task2_1() {}
/////////////////////////////////////////////////////
// Task 1.2
/////////////////////////////////////////////////////
function task2_2() {}
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
