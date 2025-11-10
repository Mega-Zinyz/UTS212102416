import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecommerece } from './ecommerece';

describe('Ecommerece', () => {
  let component: Ecommerece;
  let fixture: ComponentFixture<Ecommerece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecommerece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecommerece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
