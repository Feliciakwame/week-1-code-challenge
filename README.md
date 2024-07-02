# Week One Code Challenge

## Prequisities

1. Create a repository on your GitHub account.

   NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.

2. Use JavaScript to wire down the solution.

3. Push the solution to the above repository once done.

4. Submit the repository link for grading.

5. Ensure your repository has a well written README.

## Sytem Requirements

- Node 18+
- A browser capable of running javascript e.g safari,firefox and chrome
- A text editor capable of running javascript e.g Visual Studio Code
- RAM storage >8GB
- Disc space >1GB

## Installation

- Open your local terminal
- Clone the repository from git using:  
   git clone (SSH KEY)
- Change directory to your file by using the 'cd' command
- Open your file using the 'code(space).' command

# Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

- function marks_fn() {
- let input;
- while (true) {
  // Prompt the user to enter student marks
- input = prompt("Enter student marks:");
  //Use the else condition to countercheck the user's input
- if (!isNaN(input) && input >= 0 && input <= 100) {
  break;
  } else {
- alert("Enter a number 0-100");
  }
  }
- let grade;
  //Use the else if condition because we have multiple conditions
- if (input < 40) {
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
- alert("The grade for marks" + input + "is" + grade);
  }
