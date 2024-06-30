function marks_fn(){
    let input;
    while(true){
    input=prompt("Enter student marks:");
   if(!isNaN(input)&& input>=0 &&input<=100){
    break;
}
else{
      alert("Enter a number 0-100");
}
    }
    let grade;

    if(input<40){
        grade="E";
    }
    else if(input<50){
        grade="D";
    }
   else if(input<60){
    grade="C";
   }
   else if(input<70){
    grade="B";
   } 
   else{
    grade="A";
   }
alert("The grade for marks" + input + "is" + grade);
}
