import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlipkartMock';
  cities: any | undefined;

  selectedCity1: any | undefined;
  selectedCity2: any | undefined;

  @ViewChild('ref1') ref1: any;
  @ViewChild('ref2') ref2: any;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  parentClick() {
    alert('alert');

  }

  childClick1(event: MouseEvent) {
    this.ref2.hide();
    event.stopPropagation();
  }

  childClick2(event: MouseEvent) {
    this.ref1.hide();
    event.stopPropagation();
  }
}
