import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from '../../models/registration.model';
import RegistrationForm from './registration.form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private model: RegistrationModel;
  public form: RegistrationForm;
  constructor() {
    this.model = new RegistrationModel();
    this.form = new RegistrationForm(this.model);
  }

  ngOnInit() {
  }

  public inputPassword(event: any): void {
    // this.form.formGroup.setValue({
    //   password: event.target.value,
    //   firstName: '',
    //   lastName: '',
    //   email: ''
    // });

    this.form.formGroup.patchValue({
      password: event.target.value
    });
  }
}
