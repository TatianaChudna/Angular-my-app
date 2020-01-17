import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/login.model';
import LoginForm from './login.form';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  private model: LoginModel;
  public form: LoginForm;
  public users: LoginModel[];
  public editUser: LoginModel;

  constructor(private userService: UserService) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  ngOnInit() {
  }

  public add(name: string): void {
    this.editUser = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    this.userService
      .addUser(this.model)
      .subscribe(user => this.users.push(user));
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
