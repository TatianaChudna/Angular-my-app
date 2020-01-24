import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/login.model';
import LoginForm from './login.form';
import {LoginService} from '../../services/login.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  private model: LoginModel;
  public form: LoginForm;
  public data: any;
  public message: string;
  public user: { password: string; email: string };

  constructor(private loginService: LoginService, private cookieService: CookiesService) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.user = {email: this.form.formGroup.controls.email.value, password: this.form.formGroup.controls.password.value};
    this.loginService.login(data => {
      console.log('data', data);
      this.data = data;
      this.loginService.setData(data);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.cookieService.setCookie('token', data.token);
      this.message = 'You are log in';
    }, `"email":"${this.form.formGroup.controls.email.value}",  "password":"${this.form.formGroup.controls.password.value}"`);
  }

  public authorization() {
    // @ts-ignore
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails) {
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('user');
    this.cookieService.deleteCookie('token');
  }

  public inputPassword(event: any): void {
    this.form.formGroup.patchValue({
      password: event.target.value,
    });
  }

  public touchPasswordField(): void {
    this.form.formGroup.controls.password.markAsTouched();
  }
}
