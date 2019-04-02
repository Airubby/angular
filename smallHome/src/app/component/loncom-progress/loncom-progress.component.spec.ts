import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoncomProgressComponent } from './loncom-progress.component';

describe('LoncomProgressComponent', () => {
  let component: LoncomProgressComponent;
  let fixture: ComponentFixture<LoncomProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoncomProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoncomProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
