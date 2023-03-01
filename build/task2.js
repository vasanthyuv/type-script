"use strict";
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
