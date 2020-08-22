import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //old style - 必要參數 - 建議寫法 get到強型別string
    //this.type = +this.route.snapshot.paramMap.get('type');
    //new style - 必要參數 - 回傳型別為any - typescript用[]取回型別一律為any
    //this.type = this.route.snapshot.params['type'];
    //this.type = this.route.snapshot.params.type;

    //參數變動時才會取得新值
    //this.route.paramMap.subscribe((params: ParamMap) => {
    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type'); // 參數變動時取得新值
      console.log('type: ' + this.type);
      if (this.type == 0)
        this.type = 1;
    });
  }

}
