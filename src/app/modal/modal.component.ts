import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  login: string = '';
  password: string = '';

  fail: boolean = true;

  constructor(private router: Router, public authService: AuthService) {}

  loginFn() {
    this.authService
      .loginAuth(this.login, this.password)
      .subscribe((response) => {
        if (typeof response['accesToken'] == 'string') {
          console.log(response['accesToken']);
          this.fail = false;
          this.router.navigate(['/home']);
        }
      });
  }
}
