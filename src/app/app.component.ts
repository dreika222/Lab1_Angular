import { Component, ViewChild } from '@angular/core';
import { DateComponent } from './date/date.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LR11';

  @ViewChild(DateComponent, { static: true }) dateComponent: DateComponent;
}
