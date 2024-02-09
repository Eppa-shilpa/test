import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { MultiSelectModule } from 'primeng/multiselect';
import { ScrollTopModule } from 'primeng/scrolltop';
import { OrderListModule } from 'primeng/orderlist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartComponent } from './cart/cart.component';
import { CartListItemComponent } from './cart-list-item/cart-list-item.component';
import { LandingPageItemCategoryComponent } from './landing-page-item-category/landing-page-item-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    CartComponent,
    CartListItemComponent,
    LandingPageItemCategoryComponent,
    CategoriesComponent,
    SearchResultItemComponent,
    SearchResultComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    TabMenuModule,
    InputNumberModule,
    CardModule,
    DataViewModule,
    TieredMenuModule,
    CheckboxModule,
    BreadcrumbModule,
    OverlayPanelModule,
    ProgressBarModule,
    SliderModule,
    DropdownModule,
    AccordionModule,
    MultiSelectModule,
    ScrollTopModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
