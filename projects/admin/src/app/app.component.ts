import { SharedService } from './shared/services/shared.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  lang:any ='en'

  storedTheme = localStorage.getItem('theme-color');

  constructor(
    private translate: TranslateService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    if ('language' in localStorage) {
      this.lang = localStorage.getItem('language');
      this.translate.use(this.lang);
    } else {
      this.translate.use(this.translate.defaultLang);
      localStorage.setItem('language', this.translate.defaultLang);
    }
    this.selectlanguage(this.lang);
  }
  //lang
  selectlanguage(lang: any) {
    this.sharedService.getlang().subscribe((res: any) => {
      localStorage.setItem('language', lang);
      this.lang = res;

      if ('language' in localStorage) {
        this.lang = localStorage.getItem('language');
        this.translate.use(this.lang);
      } else {
        this.translate.use(this.translate.defaultLang);
      }
    });
  }

  //theme
  selectThemeColor(theme: any) {
    this.sharedService.getTheme().subscribe((res: any) => {
      localStorage.setItem('theme-color', theme);
      this.storedTheme = res;
    });
  }
}
