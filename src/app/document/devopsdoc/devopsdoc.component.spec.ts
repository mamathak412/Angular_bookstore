import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsDocComponent } from './devopsdoc.component';

describe('DevopsDocComponent', () => {
  let component: DevopsDocComponent;
  let fixture: ComponentFixture<DevopsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
