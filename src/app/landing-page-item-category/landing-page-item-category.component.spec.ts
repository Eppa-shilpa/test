import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageItemCategoryComponent } from './landing-page-item-category.component';

describe('LandingPageItemCategoryComponent', () => {
  let component: LandingPageItemCategoryComponent;
  let fixture: ComponentFixture<LandingPageItemCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageItemCategoryComponent]
    });
    fixture = TestBed.createComponent(LandingPageItemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
