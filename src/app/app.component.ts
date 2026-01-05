import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  //template: `toto`,
  imports: [EmployeeListComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  //styles: [`.success{ color: green; }`]
  //styles: ['']
})
export class AppComponent {

  employees: Employee[] = [
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

  currentEmployee: null | Employee = null;

  showDetails(employeeId: string) {
    this.currentEmployee = this.employees.find(e => e.id === employeeId) || null;
  }
  onEdit(employeeId: string) {
    console.log('Edit employee with ID:', employeeId);
  }
  onDelete(employeeId: string) {
    this.employees = this.employees.filter(e => e.id !== employeeId);
    this.currentEmployee = null;
  }
}
