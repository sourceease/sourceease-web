import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffingComponent } from './it-staffing.component';

describe('ItStaffingComponent', () => {
  let component: ItStaffingComponent;
  let fixture: ComponentFixture<ItStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
