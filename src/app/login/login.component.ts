import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  typePassword: string = 'password';
  showPassword: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}
  onSubmit() {
    this.auth
      .login(this.email, this.password)
      .then((res) => {
        location.href = '';
      })
      .catch((err) => console.log(err));
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.typePassword = 'text';
    } else {
      this.typePassword = 'password';
    }
  }
}
