function gradeCalculator() {
  // Prompt the user to enter student marks
  const score = prompt("Enter student marks:");
  console.log("Your grade is " + score);
  //Use the else condition to countercheck the user's input
  if (score < 0 || score > 100 || isNaN(score)) {
    return "Invalid Score";
  } else if (score > 79) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 49) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "E";
  }
}
