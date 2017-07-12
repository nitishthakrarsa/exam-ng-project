import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="container"><div class="col-sm-8 col-sm-offset-2"><router-outlet></router-outlet></div></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
