import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string): void {
    this.languageService.setLang(language);
  }

}
