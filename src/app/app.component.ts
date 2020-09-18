import { Component, OnInit } from '@angular/core';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'grace20200822';

  constructor(private languageService: LanguageService) {
    this.languageService.setInitState();
  }

  ngOnInit(): void {
  }
}
