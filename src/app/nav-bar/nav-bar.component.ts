import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  items: any;
  

  ngOnInit() {
    this.items = [
      {label: "Become a Seller"},
      {
        label: 'More',
        items: [
          {
            label: 'Notification Preferences',
            icon: 'pi pi-bell'
          },
          {
            label: '24x7 Customer Care',
            icon: 'pi pi-question-circle'
          },
          {
            label: 'Advertise',
            icon: 'pi pi-chart-line'
          },
          {
            label: 'Download App',
            icon: 'pi pi-download'
          }
        ]
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart'
      }
    ];
  }
}
