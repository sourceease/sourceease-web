import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeAbouteUsComponent } from './se-aboute-us.component';

describe('SeAbouteUsComponent', () => {
  let component: SeAbouteUsComponent;
  let fixture: ComponentFixture<SeAbouteUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeAbouteUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeAbouteUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
