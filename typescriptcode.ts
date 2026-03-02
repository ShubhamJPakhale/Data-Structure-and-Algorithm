/*
    Inheritance : Reusablity
    typescript supports single level, multiple, multlevel inheritance.
    Access specifiers are public, private,protected.
    Default access specifier is public.
*/
 
// Declare class Student
class Student1 
{ 
    // Characteristics
    Sname:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.Sname = value 
    }  
 
    //Behaviour
    DisplayS():void 
    { 
       console.log("Name of student : "+this.Sname) 
    } 
 }

 // Inherite Student class
 class Employee extends Student1
 {
    // Characteristics
    Eid : number;

    //constructor 
    constructor(value:number, Sname:string) 
    { 
        super(Sname);
        this.Eid = value; 
    }  
 
    //Behaviour
    DisplayE():void 
    { 
       console.log("ID of Employee : "+this.Sname) 
    }
 }

 // Create object of above class
 var obj2 = new Employee(11,"Joh Biden");

 obj2.DisplayE();

 // instanceof operator is used to check whether the specific variable is object of class or not

 var bret = obj2 instanceof Student1; 
 console.log(" obj1 is an instance of Student " +bret);

 var bret = obj2 instanceof Employee; 
 console.log(" obj1 is an instance of Employee " +bret);