import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  @Input() city: City[] = [];
  @Output() onadd: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChange(cityValue: any) {
    this.onadd.emit(cityValue);
  }
}
