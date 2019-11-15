import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationformComponent } from './donationform.component';

describe('DonationformComponent', () => {
  let component: DonationformComponent;
  let fixture: ComponentFixture<DonationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
