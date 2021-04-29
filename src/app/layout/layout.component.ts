import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  toogle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setToggle(data: boolean) {
    this.toogle = data;
  }

}
