import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/login.model';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private model: LoginModel;
  public form: LoginForm;

  constructor() {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  ngOnInit() {
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
