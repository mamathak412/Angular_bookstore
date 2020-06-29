import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsqueriesComponent } from './devopsqueries.component';

describe('DevopsqueriesComponent', () => {
  let component: DevopsqueriesComponent;
  let fixture: ComponentFixture<DevopsqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
