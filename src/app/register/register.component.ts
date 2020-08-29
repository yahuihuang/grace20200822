import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, FormGroupDirective } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  data: any = {
    firstName: 'Grace',
    lastName: 'Huang',
    email: 'grace@test.com',
    password: '',
    repeatPassword: '',
  };
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // 只適用一層
    // this.form = this.fb.group(this.data);
    // 建議方式
    // this.form = this.fb.group({
    //     firstName: ['Grace', [ Validators.required ] ], // 預設值、驗證器-Array[傳入function]
    //     lastName: ['Huang', [ Validators.required ]],
    //     email: ['grace@test.com', [ Validators.required, Validators.email ]],
    //     password: ['', [ Validators.required, Validators.minLength(6) ]],
    //     repeatPassword: ['', [ Validators.required, Validators.minLength(6) ]],
    // });
    this.form = this.fb.group({
      firstName:      this.fb.control('Grace', {
                            validators: [ Validators.required],
                            updateOn: 'blur', // 減少非同步異動至server的效能

      } ),
      lastName:       this.fb.control('Huang', {
                            validators: [ Validators.required ],
                            updateOn: 'blur',
      }),
      email:          this.fb.control('grace@test.com', {
                            validators: [ Validators.required, Validators.email],
                            updateOn: 'blur',
      }),
      password:       this.fb.control('', {
                            validators: [ Validators.required, Validators.minLength(6)],
                            updateOn: 'blur',
      }),
      repeatPassword: this.fb.control('', {
                            validators: [ Validators.required, Validators.minLength(6)],
                            updateOn: 'blur',
      }),
    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(f: FormGroupDirective): void {
    console.log('f.submitted: ' + f.submitted);

    switch (this.form.status) {
      case 'VALID':
        alert('表單送出成功');
        console.log(this.form.value);
        break;
      case 'INVALID':
        alert('驗證表單失敗，請確認!\n' + this.getFormValidationErrors());
        break;
      case 'PENDING':
        alert('表單驗證中，請稍後再送出!');
        break;
      case 'DISABLED':  // 所有欄位都dsabled時
        break;
    }
  }

  getFormValidationErrors(): string {
    let errorData = '';
    let errorRow = 0;
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            errorRow++;
            errorData += errorRow + '. Key control: ' + key + ', keyError: ' + keyError + ', err value: ' + controlErrors[keyError] + '\n';
          });
        }
      });

    return errorData;
  }

  isInvalid(name: string): boolean {
    return (this.fc(name).touched || this.fc(name).dirty)
           && this.fc(name).invalid;
  }

  fc(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}
