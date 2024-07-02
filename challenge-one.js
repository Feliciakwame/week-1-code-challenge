function marks_fn() {
  let input;
  while (true) {
    // Prompt the user to enter student marks
    input = prompt("Enter student marks:");
    //Use the else condition to countercheck the user's input
    if (!isNaN(input) && input >= 0 && input <= 100) {
      break;
    } else {
      alert("Enter a number 0-100");
    }
  }
  let grade;
  //Use the else if condition because we have multiple conditions
  if (input < 40) {
    grade = "E";
  } else if (input < 50) {
    grade = "D";
  } else if (input < 60) {
    grade = "C";
  } else if (input < 70) {
    grade = "B";
  } else {
    grade = "A";
  }
  alert("The grade for marks" + input + "is" + grade);
}
