import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeContactUsComponent } from './se-contact-us.component';

describe('SeContactUsComponent', () => {
  let component: SeContactUsComponent;
  let fixture: ComponentFixture<SeContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
