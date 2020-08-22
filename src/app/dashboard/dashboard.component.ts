import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set new default font family and font color to mimic Bootstrap's default styling
    chartAreaDemo();

    // Set new default font family and font color to mimic Bootstrap's default styling
    chartPieDemo();
  }

  goColor(type: number, name: string): void {
    /*this.router.navigateByUrl('/utilities/color/' + type + "?name=" + name);
    this.router.navigateByUrl(`/utilities/color/${type}?name=${name}`);

    this.router.navigate(['/utilities/color/' + type], {
      queryParams: {
        name,
        key: 123
      }
    });*/
    /*
    this.router.navigate(['/', 'utilities', 'color', type], {
      queryParams: {
        name,
        key: 123
      }
    });*/
    this.router.navigate(['/utilities/color', type], {
      queryParams: {
        name,
        key: 123
      }
    });
  }
 }
