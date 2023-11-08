import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVieuwComponent } from './product-vieuw.component';

describe('ProductVieuwComponent', () => {
  let component: ProductVieuwComponent;
  let fixture: ComponentFixture<ProductVieuwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVieuwComponent]
    });
    fixture = TestBed.createComponent(ProductVieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
