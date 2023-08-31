import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Titre : {{ title}}</h1><p>{{addResult}}</p>`,
  styles: []
})
export class AppComponent {
  title = 'Exo1';
  num1: number = 4;
  num2: number = 7;
  addResult: number = this.num1 + this.num2;
}
