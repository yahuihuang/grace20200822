import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    setTimeout( () => {
      localStorage.setItem('token', 'test...');
      /*
      this.router.navigate(['/utilities/color', 1], {
        queryParams: {
          name,
          key: 123
        }
      }); */
      localStorage.setItem('token', 'JWT');
      const ret = this.route.snapshot.queryParamMap.get('ret');
      this.router.navigateByUrl(ret);
    }, 3000);
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }
}
