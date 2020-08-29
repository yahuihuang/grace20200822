import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
    this.form = this.fb.group({
        firstName: ['Grace', [ Validators.required ] ], // 預設值、驗證器-Array[傳入function]
        lastName: ['Huang', [ Validators.required ]],
        email: ['grace@test.com', [ Validators.required, Validators.email ]],
        password: ['', [ Validators.required, Validators.minLength(6) ]],
        repeatPassword: ['', [ Validators.required, Validators.minLength(6) ]],
    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(): void {
    switch (this.form.status) {
      case 'VALID':
        alert('表單送出成功');
        console.log(this.form.value);
        break;
      case 'INVALID':
        alert('驗證表單失敗，請確認!');
        break;
      case 'PENDING':
        alert('表單驗證中，請稍後再送出!');
        break;
      case 'DISABLED':  // 所有欄位都dsabled時
        break;
    }
  }

  fc(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}
