import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css'],
})
export class ServiceSectionComponent implements OnInit {
  active1: boolean = true;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleActive1() {
    this.active1 = !this.active1;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
    if (
      this.active2 === false &&
      this.active3 === false &&
      this.active4 === false
    ) {
      this.active1 = true;
    }
  }
  toggleActive2() {
    this.active2 = !this.active2;
    this.active1 = false;
    this.active3 = false;
    this.active4 = false;
    if (
      this.active1 === false &&
      this.active3 === false &&
      this.active4 === false
    ) {
      this.active2 = true;
    }
  }
  toggleActive3() {
    this.active3 = !this.active3;
    this.active2 = false;
    this.active1 = false;
    this.active4 = false;
    if (
      this.active1 === false &&
      this.active3 === false &&
      this.active4 === false
    ) {
      this.active3 = true;
    }
  }
  toggleActive4() {
    this.active4 = !this.active4;
    this.active2 = false;
    this.active3 = false;
    this.active1 = false;
    if (
      this.active2 === false &&
      this.active3 === false &&
      this.active1 === false
    ) {
      this.active4 = true;
    }
  }
}
