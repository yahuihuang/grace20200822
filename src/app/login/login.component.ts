import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  data: any = {
    email: 'grace@test.com',
    password: '123123',
    rememberMe: true
  };

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {

  }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    /*
    setTimeout( () => {
      localStorage.setItem('token', 'test...');
      localStorage.setItem('token', 'JWT');
      const ret = this.route.snapshot.queryParamMap.get('ret');
      this.router.navigateByUrl(ret);
    }, 3000);*/
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(form: NgForm): void {
    switch (form.status) {
      case 'VALID':
        console.log(form.value);
        break;
      case 'INVALID':
        alert('驗證表單失敗，請確認!');
        break;
      case 'PENDING':
        alert('表單驗證中，請稍後再送出!');
        break;
      case 'DISABLED':  //所有欄位都dsabled時
        break;
    }
    /*
    if (form.valid) {
      console.log(form.value);
    } else {
      alert('無法驗證表單');
    }*/
    // this.http.post('/save', this.data).subscribe(result => {

    // });
  }
}
