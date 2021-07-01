import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = new BehaviorSubject<User | null>(null);
  userObs = this.user.asObservable();
  constructor() { }

  private users: User[] = [
    {username: 'advaith', emailId: 'advaith@gmail.com', password: 'advaith'},
    {username: 'abhiram', emailId: 'abhiram@gmail.com', password: 'abhiram'},
    {username: 'aditya', emailId: 'aditya@gmail.com', password: 'aditya'},
    {username: 'aarathi', emailId: 'aarathi@gmail.com', password: 'aarathi'},
  ];

  get usernames(): string[] {
    const usernames: string[] = [];
    this.users.forEach(user => {
      usernames.push(user.username);
    });
    return usernames;
  }

  /*
  * This function validates the username and password against the users[] json array
  * Also updates the user subject based on validity
  * Returns true if credentials are valid; else false
  */
  login(username: string, password: string): boolean {
    let loginValidity = false;
    this.users.forEach(user => {
      if(user.username === username && user.password === password) {
        loginValidity = true;
        this.user.next(user);
      }
    });
    return loginValidity;
  }

  /*
  * This function logs out the user
  */
  logout() {
    this.user.next(null);
  }
}
