import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      'username': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });
  }

  /*
  * This method initiates the login in the application
  */
  onSubmit() {
    // Checks for validity of the form and returns if invalid
    if (this.authForm.invalid) return;
    // Gathers the username & password from the form
    const username = this.authForm.controls['username'].value;
    const password = this.authForm.controls['password'].value;
    // Displays the loading spinner for 2 seconds
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      // login() service call 
      const loginStatus = this.authService.login(username, password);
      // Login Successfull
      if (loginStatus) {
        this.router.navigate(['/gallery']);
      }
      // Login failed
      else {
        this.errorMessage = 'Invalid Credentials'
        this.snackBar.open(this.errorMessage, 'LOGIN FAILED', {
          duration: 3000
        });
        this.authForm.reset();
      }
    }, 2000)
  }
}
