import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-item-category',
  templateUrl: './landing-page-item-category.component.html',
  styleUrls: ['./landing-page-item-category.component.scss']
})
export class LandingPageItemCategoryComponent {
  @Input() itemCategory: any;
  responsiveOptions: any;
  ngOnInit(){
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}
