import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  // isLoggedIn:boolean = true

  constructor() {}

  isAdmin: boolean = false;


  Login(email: string, password: string) {
    if (email.trim() === 'admin@gmail.com' && password.trim() === 'Admin') {
      // this.route.navigate(['/rooms','add'])
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email.trim() === 'user@gmail.com' && password.trim() === 'user') {
      // this.route.navigate(['/rooms','add'])
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
