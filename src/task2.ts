class Course{
    courseid:number;
    coursename:string;

    coursedetail(courseid:number,coursename:string){
        this.courseid=courseid;
        this.coursename=coursename;

    }


}
class Employee extends Course{
    empid:number;
    empname:string;
    empdesignation:string;

    employeedetail(courseid:number,coursename:string,empid:number,empname:string,empdesignation:string){
        this.courseid=courseid;
        this.coursename;
        this.empid=empid;
        this.empname=empname;
        this.empdesignation=empdesignation;

    }

}
class Admin extends Employee{
    adminid:number;
    adminname:string;

    admindetails(courseid:number,coursename:string,empid:number,empname:string,empdesignation:string,adminid:number,adminname:string){
        this.courseid=courseid;
        this.coursename;
        this.empid=empid;
        this.empname=empname;
        this.empdesignation=empdesignation;
       
        this.adminid=adminid;
        this.adminname=adminname;
console.log(courseid,coursename,empid,empname,empdesignation,adminid,adminname);

    }
    
}
let emplo = new Admin();
emplo.admindetails(123,"java",32,"vasanth","dev",212,"asdads");

/*abstract class*/
abstract class Electricity{
   
   public units:number;

   abstract calculation():number;
} 
class Domestic extends Electricity{
    rate:number;
    
    constructor() {
        super();
        this.rate = 5;
    }
    calculation(units:number): number {
        this.units=units;

        return rate*units;
    }
}
class Commercial extends Electricity{
    rate:number;
    
    constructor() {
        super();
        this.rate = 10;
    }
    calculation(units:number): number {
        this.units=units;

        return rate*units;
    }
}
let dom = new Domestic();
console.log(dom.calculation(3));
let com = new Commercial();
console.log(com.calculation(4));