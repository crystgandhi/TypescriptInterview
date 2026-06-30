class Employee{
  
  constructor(private name:string,private id:number ){}

  employeeDetails():void{

    console.log(this.name, this.id);

  }


}
const empolyee=new Employee('john',89);
empolyee.employeeDetails();

class Employee1{
  
    name:string="Kate";
    private id:number=50;
  
   employeeDetails():void{

    console.log(this.name, this.id);
  }
}
const empolyee1=new Employee1();
empolyee1.employeeDetails();

