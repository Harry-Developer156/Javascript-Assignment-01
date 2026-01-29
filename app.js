// Section 1: var vs let vs const (Deep Understanding)
// Task 1.1
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
  console.log("Let age1 abhi hoist hogya hai likn TDZ mei hai = ReferenceError");
}

{
  let age1 = 1000;
  console.log("Block k andr " + age1);
  age1 = "twenty-eight";
  console.log("let humy variale ki value ya datatype change krny sy nhi rukta = " + age1);
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
  console.log("Const fatherName abhi hoist hogya hai likn TDZ mei hai = ReferenceError");
}

{
  const fatherNAme = "Fareed";
  console.log(fatherNAme);
  try {
    fatherNAme = "Ghulam Fareed";
  } catch (e) {
    console.log("Const k variable mei naa tw value change hoti na datatype");
  }
}

try {
  console.log(fatherNAme);
} catch (e) {
  console.log("Block k bhr const exist hi nhi krta");
}
