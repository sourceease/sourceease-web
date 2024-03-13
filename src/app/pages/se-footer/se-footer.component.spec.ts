import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeFooterComponent } from './se-footer.component';

describe('SeFooterComponent', () => {
  let component: SeFooterComponent;
  let fixture: ComponentFixture<SeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
