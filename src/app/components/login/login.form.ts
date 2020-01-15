import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../../models/login.model';

export default class LoginForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: LoginModel;

  constructor(
    model: LoginModel,
  ) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email,
        {
          validators: [Validators.required,
            Validators.email],
          updateOn: 'change'
        }),
      password: new FormControl(this.model.password,
        {
          validators: [Validators.required,
            Validators.minLength(7)],
          updateOn: 'blur'
        })
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      console.log(data);
      this.model.email = data.email;
      this.model.password = data.password;
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }
}
