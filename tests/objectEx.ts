class Employee {
    constructor(
        public employeeInfo: {
            empId: number,
            empName: string,
            department: string,
            salary: number
        }
    ) { }
    display(): void {
        console.log(this.employeeInfo);
    }
}
const emp = new Employee({
    empId: 101,
    empName: "kathy",
    department: "QA Automation",
    salary: 85000}
);
emp.display();