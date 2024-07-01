function calculateNetSalary() {
  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter the benefits:"));
  const grossSalary = basicSalary + benefits;
  function calculatePAYE() {
    if (grossSalary < 240001) {
      return (PAYE = (10 * grossSalary) / 100);
    } else if (grossSalary < 32333) {
      return (PAYE = (25 * grossSalary) / 100);
    } else if (grossSalary < 500000) {
      return (PAYE = (30 * grossSalary) / 100);
    } else if (grossSalary < 800000) {
      return (PAYE = (35 * grossSalary) / 100);
    }
  }
  calculatePAYE();
  function calculateNHIF() {
    if (grossSalary < 6000) {
      return (NHIF = 150);
    } else if (grossSalary < 8000) {
      return (NHIF = 300);
    } else if (grossSalary < 12000) {
      return (NHIF = 400);
    } else if (grossSalary < 15000) {
      return (NHIF = 500);
    } else if (grossSalary < 20000) {
      return (NHIF = 600);
    } else if (grossSalary < 25000) {
      return (NHIF = 500);
    } else if (grossSalary < 30000) {
      return (NHIF = 750);
    } else if (grossSalary < 35000) {
      return (NHIF = 900);
    } else if (grossSalary < 40000) {
      return (NHIF = 950);
    } else if (grossSalary < 45000) {
      return (NHIF = 1000);
    } else if (grossSalary < 50000) {
      return (NHIF = 1100);
    } else if (grossSalary < 60000) {
      return (NHIF = 1200);
    } else if (grossSalary < 70000) {
      return (NHIF = 1300);
    } else if (grossSalary < 80000) {
      return (NHIF = 1400);
    } else if (grossSalary < 90000) {
      return (NHIF = 1500);
    } else if (grossSalary < 100000) {
      return (NHIF = 1600);
    } else if (grossSalary > 100000) {
      return (NHIF = 1700);
    }
  }
  calculateNHIF();
  const nssfDeductions = 1000;
  const netSalary = grossSalary - PAYE - NHIF - nssfDeductions;
  console.log("Gross salary:" + grossSalary);
  console.log("PAYE:" + PAYE);
  console.log("NHIF:" + NHIF);
  console.log("NSSF deductions:" + nssfDeductions);
  console.log("Net Salary:" + netSalary);
}
