"use strict";
class Employee {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    getempdetail() {
        console.log("empid=" + this.empid + "emp name:" + this.empname + "emp designation:" + this.empdesignation + "emp salary:" + this.empsalary + "emp project:" + this.empproject);
    }
    backtick() {
        console.log(`emp id:${this.empid},emp name:${this.empname},emp designation:${this.empdesignation},emp salary:${this.empsalary},emp project:${this.empproject}`);
    }
}
const emp = new Employee(12, "vasanth", "developer", 25000, "java");
emp.getempdetail();
emp.backtick();
class Course {
    coursedetail(courseid, coursename) {
        this.courseid = courseid;
        this.coursename = coursename;
    }
}
class Employee extends Course {
    employeedetail(courseid, coursename, empid, empname, empdesignation) {
        this.courseid = courseid;
        this.coursename;
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
    }
}
class Admin extends Employee {
    admindetails(courseid, coursename, empid, empname, empdesignation, adminid, adminname) {
        this.courseid = courseid;
        this.coursename;
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.adminid = adminid;
        this.adminname = adminname;
        console.log(courseid, coursename, empid, empname, empdesignation, adminid, adminname);
    }
}
let emplo = new Admin();
emplo.admindetails(123, "java", 32, "vasanth", "dev", 212, "asdads");
