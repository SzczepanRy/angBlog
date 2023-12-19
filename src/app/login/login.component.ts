import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  fail: boolean = true;

  constructor(private router: Router) {}

  loginFn() {
    if (this.login == 'a' && this.password == 'a') {
      this.fail = false;
      this.router.navigate(['/home']);
    }
  }
}
