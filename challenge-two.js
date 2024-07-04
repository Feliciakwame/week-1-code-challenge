//Create a function that checks the speed
function checkSpeed() {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  // Prompt user to enter car speed
  let speedInput = prompt("Enter the car speed:");
  let speed = parseFloat(speedInput);
  if (isNaN(speed) || speed < 0) {
    console.log("Speed is invalid");
    return;
  }
  if (speed <= speedLimit) {
    console.log("OK");
  } else {
    //Math.floor is used to round off the value of demeritPoints
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log("Your Demerit points are" + demeritPoints);
  }
}
