//class
class Employee
{
  employeeName:string;

  constructor(name:string)
  {
    this.employeeName=name;
  }

  greet()
  {
    console.log(`Hi ${this.employeeName}`);
  }
}

let emp1=new Employee('Nivi');
console.log(emp1.employeeName);
emp1.greet();
