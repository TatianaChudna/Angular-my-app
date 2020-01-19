import {Component, OnInit} from '@angular/core';
import {RegistrationModel} from '../../models/registration.model';
import RegistrationForm from './registration.form';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private model: RegistrationModel;
  public form: RegistrationForm;
  data: any;
  message: string;

  constructor(private registrationService: RegistrationService) {
    this.model = new RegistrationModel();
    this.form = new RegistrationForm(this.model);
  }

  ngOnInit() {
  }

  public inputPassword(event: any): void {
    this.form.formGroup.patchValue({
      password: event.target.value
    });
  }

  public touchPasswordField(): void {
    this.form.formGroup.controls.password.markAsTouched();
  }

  onSubmit() {
    this.registrationService.registerUser(
      data => {
        console.log('data', data);
        this.data = data;
        this.registrationService.setData(data);
        this.message = 'You are registered!';
      },
      // tslint:disable-next-line:max-line-length
      `{"name":"${this.form.formGroup.controls.name.value}", "surname":"${this.form.formGroup.controls.surname.value}", "email":"${this.form.formGroup.controls.email.value}",  "password":"${this.form.formGroup.controls.password.value}", "phone":"${this.form.formGroup.controls.phone.value}"}`
    );
  }
}
