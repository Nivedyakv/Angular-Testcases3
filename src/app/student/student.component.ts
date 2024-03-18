import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
  department: string;
  marks: number;
}
 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentData: Student[] = [
    { name: "Alees", age: 19, department: "IT", marks: 100 },
    { name: "Akhil", age: 15, department: "CS", marks: 50 },
    { name: "Zara", age: 18, department: "Mech", marks: 60 },
    { name: "Dileep", age: 23, department: "EEE", marks: 65 },
    { name: "Mohan", age: 17, department: "CS", marks: 43 },
    { name: "Avin", age: 18, department: "CS", marks: 99 },
    { name: "Riya", age: 25, department: "IT", marks: 37 },
    { name: "Lalitha", age: 19, department: "DT", marks: 59 },
   
  ];
  
  // Properties for sorting
  selectedField: string = 'name';
  sortDirection: number = 1;
 
  // Property for minimum marks input
  stud_mark: number | undefined;
 
  // Method to sort the students array based on selected field
  sortStudents(field: string): void {
    if (this.selectedField === field) {
      this.sortDirection = -this.sortDirection;
    } else {
      this.sortDirection = 1;
    }
    this.selectedField = field;
    this.studentData.sort((a, b) => {
      // Type assertion to inform TypeScript that the properties accessed using 'field' exist on the 'Student' interface
      const aValue = (a as any)[field];
      const bValue = (b as any)[field];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortDirection * aValue.localeCompare(bValue); // Use localeCompare for string comparison
      } else {
        return this.sortDirection * (aValue - bValue);
      }
    });
  }
 
  // Method to filter students with marks greater than the given mark
filterStudents(): void {
  if (this.stud_mark !== undefined) {
    const minMarks = this.stud_mark;
    this.studentData = this.studentData.filter(student => student.marks > minMarks);
    this.sortStudents(this.selectedField); // Sort the filtered data again
  }
}
}
