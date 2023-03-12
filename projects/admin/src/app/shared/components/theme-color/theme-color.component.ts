import { SharedService } from './../../services/shared.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-color',
  templateUrl: './theme-color.component.html',
  styleUrls: ['./theme-color.component.scss'],
})
export class ThemeColorComponent implements OnInit {
  storedTheme: any = '';
  @Output() selectedColor: EventEmitter<string> = new EventEmitter();
  @Output() selectedlang: EventEmitter<string> = new EventEmitter();
  lang: any = 'en';
  constructor(
    private sharedService: SharedService,
    private translate: TranslateService
  ) {
    this.lang = this.translate.currentLang;
  }
  select: boolean = false;
  ngOnInit(): void {
    if ('theme-color' in localStorage) {
      this.storedTheme = localStorage.getItem('theme-color');
    } else {
      this.storedTheme = localStorage.setItem('theme-color', 'theme-red');
    }
  }
  selectColor() {
    this.select = !this.select;
  }
  setTheme(theme: any) {
    this.selectedColor.emit(theme);
    this.sharedService.getColorTheme();
  }
  /////////////translate
  changeLanguage(event: any) {
    let value = event.target.innerText;
    if (this.lang == 'en') {
      this.lang = 'ar';
    } else {
      this.lang = 'en';
    }

    this.selectedlang.emit(value);

    this.sharedService.getselectedLanguage();
  }
}
