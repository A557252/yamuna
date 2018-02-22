import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInquiryComponent } from './booking-inquiry.component';

describe('BookingInquiryComponent', () => {
  let component: BookingInquiryComponent;
  let fixture: ComponentFixture<BookingInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
