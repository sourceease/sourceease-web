import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeHomeComponent } from './se-home.component';

describe('SeHomeComponent', () => {
  let component: SeHomeComponent;
  let fixture: ComponentFixture<SeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
