import { Component, input , output} from '@angular/core';
import { Employee } from '../models/employee.model';
import { LevelPipe } from '../level.pipe';


@Component({
  selector: 'app-employee-list',
  imports: [ LevelPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employees = input.required<Employee[]>()
  edit = output<string>();
  delete = output<string>();
  details = output<string>();

  onEditClick(employee: Employee) {
    this.edit.emit(employee.id);  
  }
  onDeleteClick(employee: Employee) {
    this.delete.emit(employee.id);
  }
  onDetailsClick(employee: Employee) {
    this.details.emit(employee.id);
  }
}
