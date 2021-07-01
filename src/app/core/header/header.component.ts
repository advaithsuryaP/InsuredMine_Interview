import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authStatus: boolean = false;
  userSub: Subscription | undefined;
  userData!: User;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userSub = this.authService.userObs.subscribe(user => {
      if(user) {
        this.authStatus = !!user;
        this.userData = user;
      } else {
        this.authStatus = false;
      }
    })
  }

  logout() {
    if(this.authStatus) {
      this.authService.logout();
    }
  }

  ngOnDestroy() {
    if(this.userSub) this.userSub.unsubscribe();
  }

}
