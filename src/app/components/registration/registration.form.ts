import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationModel} from '../../models/registration.model';

export default class RegistrationForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: RegistrationModel;

  constructor(
    model: RegistrationModel,
  ) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(this.model.name, {validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}),
      surname: new FormControl(this.model.surname, {validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}),
      email: new FormControl(this.model.email, {validators: [Validators.required, Validators.email], updateOn: 'change'}),
      password: new FormControl(this.model.password, {validators: [Validators.required, Validators.pattern(/aa/)], updateOn: 'change'}),
      phone: new FormControl(this.model.phone, {validators: [Validators.required, Validators.pattern(/aa/)], updateOn: 'change'})
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      console.log(data);
      this.model.email = data.email;
      this.model.password = data.password;
      this.model.name = data.name;
      this.model.surname = data.surname;
      this.model.phone = data.phone;
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get surname() {
    return this.formGroup.get('surname');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get phone() {
    return this.formGroup.get('phone');
  }
}
