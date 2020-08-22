import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Set new default font family and font color to mimic Bootstrap's default styling
    chartAreaDemo();

    // Set new default font family and font color to mimic Bootstrap's default styling
    chartPieDemo();
  }

}
