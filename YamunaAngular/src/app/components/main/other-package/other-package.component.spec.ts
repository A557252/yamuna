import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPackageComponent } from './other-package.component';

describe('OtherPackageComponent', () => {
  let component: OtherPackageComponent;
  let fixture: ComponentFixture<OtherPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
