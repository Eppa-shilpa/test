import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  items: any;
  home: any;
  menuItems: any;
  activeItem: any;
  range: any;
  minRange: any;
  selectedMinRange: any;
  maxRange: any;
  selectedMaxRange: any;
  brands: any;
  selectedBrands: any;
  back: string = "Back to Top"
  ngOnInit() {
      this.items = [{ label: 'Mobile & Accessories' }, { label: 'Mobiles' }];
      this.home = { label: 'Home', routerLink: '/' };
      this.menuItems = [
        {label: "Relevance"},
        {label: " Popularity"},
        {label: "Price -- Low to High"},
        {label: "Price -- High to Low"},
        {label: "Newest First"}
      ]
      this.activeItem = this.menuItems[0];
      this.range = [0,100];
      this.minRange = [
        {name: "Min"},
        {name: 10000},
        {name: 15000},
        {name: 20000},
        {name: 30000}
      ];
      this.maxRange = [
        {name: 10000},
        {name: 15000},
        {name: 20000},
        {name: 30000},
        {name: "30000+"}
      ]
      this.selectedMinRange = this.minRange[0];
      this.selectedMaxRange = this.maxRange[0];

      this.brands = [
        {name: "Apple"},
        {name: "Samsung"},
        {name: "Vivo"},
        {name: "RedMi"}
      ]
  }
}
