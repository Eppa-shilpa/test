import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: any;
  ngOnInit() {
    this.categories = [
      {
        name: "Grocery",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
      },
      {
        name: "Mobiles",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
      },
      {
        name: "Fashion",
        img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
        items: [
          {
            label: "Men's Top Wear", items: [
              { label: "All" },
              { label: "Men's Tshirts" }
            ]
          },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Women Ethinic" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" }
        ]
      },
      {
        name: "Electronics",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
        items: [
          {
            label: "Men's Top Wear", items: [
              { label: "All" },
              { label: "Men's Tshirts" }
            ]
          },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Women Ethinic" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" },
          { label: "Men's Top Wear" },
          { label: "Men's Bottom Wear" }
        ]
      },
      {
        name: "Home & Furniture",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
      },
      {
        name: "Appliances",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
      },
      {
        name: "Travel",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
      },
      {
        name: "Beauty, Toys & More",
        img: "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
      },
      {
        name: "Two Wheelers",
        img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
      }
    ]
  }
}
