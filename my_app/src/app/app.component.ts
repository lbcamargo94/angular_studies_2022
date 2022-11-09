import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button>Adivionar</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  public valor: number = 1;
  constructor() {}

  public adicionar(): number {
    return this.valor;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}
