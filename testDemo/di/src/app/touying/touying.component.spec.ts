import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouyingComponent } from './touying.component';

describe('TouyingComponent', () => {
  let component: TouyingComponent;
  let fixture: ComponentFixture<TouyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
