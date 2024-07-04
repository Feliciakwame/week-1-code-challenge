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

## Code

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

# Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

## Code

- //Create a function that checks the speed
- function checkSpeed() {
- const speedLimit = 70;
- const kmPerDemeritPoint = 5;
- // Prompt user to enter car speed
- let speed = prompt("Enter the car speed:");
- if (speed <= 70) {
- console.log("OK");
- } else {
- //Math.floor is used to round off the value of demeritPoints
- const demeritPoints = Math.floor((speed - speedLimit) / - - kmPerDemeritPoint);
- console.log("Your Demerit points are:");
  }
  }

# Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

## Code// Create a function to calculate net salary

- function calculateNetSalary() {
- const basicSalary = parseFloat(prompt("Enter basic salary:"));
- const benefits = parseFloat(prompt("Enter the benefits:"));
- const grossSalary = basicSalary + benefits;
  // Create a function to calculate PAYEE
- function calculatePAYE() {
  //Use else if condition since we have multiple conditions
- if (grossSalary < 240001) {
- return (PAYE = (10 \* grossSalary) / 100);
- } else if (grossSalary < 32333) {
- return (PAYE = (25 \* grossSalary) / 100);
- } else if (grossSalary < 500000) {
- return (PAYE = (30 \* grossSalary) / 100);
- } else if (grossSalary < 800000) {
- return (PAYE = (35 \* grossSalary) / 100);
- }
- }
- calculatePAYE();
  //Create a function to calculate NHIF
- function calculateNHIF() {
- if (grossSalary < 6000) {
- return (NHIF = 150);
- } else if (grossSalary < 8000) {
- return (NHIF = 300);
  - } else if (grossSalary < 12000) {
- return (NHIF = 400);
  - } else if (grossSalary < 15000) {
- return (NHIF = 500);
  - } else if (grossSalary < 20000) {
- return (NHIF = 600);
  - } else if (grossSalary < 25000) {
- return (NHIF = 500);
  - } else if (grossSalary < 30000) {
- return (NHIF = 750);
  - } else if (grossSalary < 35000) {
- return (NHIF = 900);
  - } else if (grossSalary < 40000) {
- return (NHIF = 950);
  - } else if (grossSalary < 45000) {
- return (NHIF = 1000);
  - } else if (grossSalary < 50000) {
- return (NHIF = 1100);
  - } else if (grossSalary < 60000) {
- return (NHIF = 1200);
  - } else if (grossSalary < 70000) {
- return (NHIF = 1300);
  - } else if (grossSalary < 80000) {
- return (NHIF = 1400);
  - } else if (grossSalary < 90000) {
- return (NHIF = 1500);
  - } else if (grossSalary < 100000) {
- return (NHIF = 1600);
  - } else if (grossSalary > 100000) {
- return (NHIF = 1700);
  - }
  - }
- calculateNHIF();
  // Initialize the value of nssfDeductions
- const nssfDeductions = 1000;
  // Calculate net salary using the subtraction operation
- const netSalary = grossSalary - PAYE - NHIF - nssfDeductions;
- console.log("Gross salary:" + grossSalary);
- console.log("PAYE:" + PAYE);
- console.log("NHIF:" + NHIF);
- console.log("NSSF deductions:" + nssfDeductions);
- console.log("Net Salary:" + netSalary);
  }
