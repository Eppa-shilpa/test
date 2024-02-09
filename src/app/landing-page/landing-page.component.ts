import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  products: any;
  responsiveOptions: any;
  layout: any;
  items: any;
  categories = [
    { name: "Best of Electronics", bg: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90", products: [{img: "https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70", name: "Printers", price: 3999, brand: "HP"},{img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", name: "Cameras", price: 19999, brand: "Sony"},{img: "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70", name: "Trimmers", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70", name: "Power Banks", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70", name: "Projectors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"}]},
    { name: "Beauty, Food, Toys & more", bg: "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90", products: [{img: "https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70", name: "Printers", price: 3999, brand: "HP"},{img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", name: "Cameras", price: 19999, brand: "Sony"},{img: "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70", name: "Trimmers", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70", name: "Power Banks", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70", name: "Projectors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"}]},
    { name: "Get Set For Sports", bg: "", products: [{img: "https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70", name: "Printers", price: 3999, brand: "HP"},{img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", name: "Cameras", price: 19999, brand: "Sony"},{img: "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70", name: "Trimmers", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70", name: "Power Banks", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70", name: "Projectors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"},{img: "https://rukminim2.flixcart.com/image/200/200/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70", name: "Monitors", price: 999, brand: "Mi"}]}
  ]
  ngOnInit() {
    this.products = ["https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/fdab548a3cfc1e05.png?q=50","https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/bc1fcb4e4db75861.jpg?q=50","https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/3252244722779d39.jpg?q=50","https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/3959ad9f670aeeeb.jpg?q=50"]
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
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
