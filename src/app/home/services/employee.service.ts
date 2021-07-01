import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  private employees: Employee[] = [
    { id: 101, name: 'Ole Gunnar Solskjaer' },
    { id: 102, name: 'Cristiano Ronaldo' },
    { id: 103, name: 'Lionel Messi' },
    { id: 104, name: 'Javier Hernandez' },
    { id: 105, name: 'Andrea Pirlo' },
    { id: 106, name: 'Wayne Rooney' },
    { id: 107, name: 'Samual Lockhurst' },
    { id: 108, name: 'Samuel Eto\'s' },
    { id: 109, name: 'Steven Gerrard' },
    { id: 110, name: 'Sergio Aguero' },
    { id: 111, name: 'Sergio Ramos' },
    { id: 112, name: 'Thierry Henry' },
    { id: 113, name: 'Harry Potter' },
    { id: 114, name: 'Hannibal Mejbri' },
    { id: 115, name: 'Harry Maguire' },
    { id: 115, name: 'Harry Kane' },
    { id: 116, name: 'Harry Winks' },
  ];

  /*
  * This method returns an observable of employees array that match the search term
  */
  searchEmployee(term: string): Observable<Employee[]> {
    if (!term.trim()) return of([]);
    return of(this.employees.filter(emp => emp.name.toLowerCase().includes(term.toLowerCase())));
  }

  /*
  * This method returns a slice of the employees array
  */
  getEmployees(): Employee[] {
    return this.employees.slice(); 
  }
}
