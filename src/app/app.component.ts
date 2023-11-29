import { Component } from '@angular/core';
import { concatLatestFrom } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-examples';
  ngOnInit() {}
}
