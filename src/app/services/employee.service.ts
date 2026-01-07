import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
      {
        "id": "1t23",
        "name": "John Doe",
        "department": "IT",
        "level": "M"
      },
      {
        "id": "4r56",
        "name": "Jane Smith",
        "department": "HR",
        "level": "S"
      },
      {
        "id": "7y89",
        "name": "Alice Johnson",
        "department": "Marketing",
        "level": "J"
      },
      {
        "id": "0p12",
        "name": "Bob Brown",
        "department": "IT",
        "level": "M"
      }
  ];

  constructor() { }
  
  getEmployee(id: string){
    return  this.employees.find(e => e.id === id) || null;
  }

  deletEpmloyeeById(id: string){
    this.employees = this.employees.filter(e => e.id !== id); 
  }

  getEmployees(): Employee[] {
      return this.employees;
  }
}
