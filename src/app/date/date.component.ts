import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  date: string = new Date().toDateString();
  time: string;
  user: string;
  visibility = true;

  show() {
    this.visibility = !this.visibility;
  }

  constructor() {
    setInterval(() => {
      this.time = new Date().toTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
