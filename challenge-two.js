function checkSpeed (){
    const speedLimit=70;
    const kmPerDemeritPoint=5;
    let speed=prompt("Enter the car speed:");
    if(speed<=70){
console.log("OK");
    }
    else{
        const demeritPoints=Math.floor((speed-speedLimit)/kmPerDemeritPoint);
        console.log("Your Demerit points are"+ demeritPoints);
    }
}
