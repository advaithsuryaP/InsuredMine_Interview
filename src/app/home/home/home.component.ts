import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees$!: Observable<Employee[]>;
  empControl = new FormControl();
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.empControl.valueChanges.pipe(
      debounceTime(300), // waits for 300ms for a keyboard stroke
      distinctUntilChanged(), // Chains an observable if searchTerm is distinct
      switchMap((term: string) => { //  Maps the outer observable to the inner observable to return a flattend observable
        if(term[0] === '@') {
          // Initiate search only if the searchTerm starts with '@'
          return this.employeeService.searchEmployee(term.slice(1))
        } else if(term === '') {
          // Empty the autocomplete array if searchTerm is empty
          return of([]);
        } else {
          // no result
          return [];
        }
      })
    );
    // This data is to be displayed for reference
    this.employees = this.employeeService.getEmployees();
  }
}
