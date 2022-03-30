import { Component } from '@angular/core';

@Component({
  selector: 'body',
  template: `<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>`,
})
export class AppComponent {
  title = 'jujutv';
}
