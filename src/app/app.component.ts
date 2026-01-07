import { Component, inject } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeListComponent } from './components/smart/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeComponent } from './components/ui/employee/employee.component';

@Component({
  selector: 'app-root',
  //template: `toto`,
  imports: [EmployeeListComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  //styles: [`.success{ color: green; }`]
  //styles: ['']
})
export class AppComponent {

  employees: Employee[] = [];

  currentEmployee: null | Employee = null;

  employeeService = inject(EmployeeService);

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  showDetails(employeeId: string) {
    this.currentEmployee = this.employeeService.getEmployee(employeeId) ;
  }
  onEdit(employeeId: string) {
    console.log('Edit employee with ID:', employeeId);
  }
  onDelete(employeeId: string) {
    this.employeeService.deletEpmloyeeById(employeeId);
    this.employees = this.employeeService.getEmployees();
    this.currentEmployee = null;
  }
}
