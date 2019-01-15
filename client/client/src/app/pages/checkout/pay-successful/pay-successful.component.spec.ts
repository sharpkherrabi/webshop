import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySuccessfulComponent } from './pay-successful.component';

describe('PaySuccessfulComponent', () => {
  let component: PaySuccessfulComponent;
  let fixture: ComponentFixture<PaySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
