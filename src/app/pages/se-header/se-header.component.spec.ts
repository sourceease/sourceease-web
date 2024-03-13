import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeHeaderComponent } from './se-header.component';

describe('SeHeaderComponent', () => {
  let component: SeHeaderComponent;
  let fixture: ComponentFixture<SeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
