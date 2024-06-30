function calculateNetSalary(){
    const basicSalary=parseFloat(prompt("Enter basic salary:"));
    const benefits=parseFloat(prompt("Enter the benefits:"));
    const nhifRate=0.025;
    const nssfRate=0.06;
    const taxRate=0.24;
    const grossSalary=basicSalary+benefits;
    const tax=grossSalary*taxRate;
    const nhifDeductions=grossSalary*nhifRate;
    const nssfDeductions=grossSalary*nssfRate;
    const netSalary=grossSalary-tax-nhifDeductions-nssfDeductions;
    console.log("Gross salary:"+grossSalary);
    console.log("Tax:"+tax);
    console.log("NHIF deductions:"+nhifDeductions);
    console.log("NSSF deductions:"+nssfDeductions);
    console.log("Net Salary:"+netSalary);

}