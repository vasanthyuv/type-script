class Employee {
    empid?: number | string;
    empname: string;
    empdesignation: string;
    empsalary: number;
    empproject: string;

    public constructor(empid: number | string, empname: string, empdesignation: string, empsalary: number, empproject: string) {

        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;

        this.empsalary = empsalary;
        this.empproject = empproject;

    }

    getempdetail() {
        console.log("empid=" + this.empid + "emp name:" + this.empname + "emp designation:" + this.empdesignation + "emp salary:" + this.empsalary + "emp project:" + this.empproject);



    }
backtick (){
    console.log(`emp id:${this.empid},emp name:${this.empname},emp designation:${this.empdesignation},emp salary:${this.empsalary},emp project:${this.empproject}`);
}



}
const emp = new Employee(12, "vasanth", "developer", 25000, "java");
emp.getempdetail();
emp.backtick();

