import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutDetailComponent } from './prodcut-detail.component';

describe('ProdcutDetailComponent', () => {
  let component: ProdcutDetailComponent;
  let fixture: ComponentFixture<ProdcutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
