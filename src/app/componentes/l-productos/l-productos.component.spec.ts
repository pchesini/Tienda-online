import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LProductosComponent } from './l-productos.component';

describe('LProductosComponent', () => {
  let component: LProductosComponent;
  let fixture: ComponentFixture<LProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LProductosComponent]
    });
    fixture = TestBed.createComponent(LProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
