import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsvideoComponent } from './devopsvideo.component';

describe('DevopsvideoComponent', () => {
  let component: DevopsvideoComponent;
  let fixture: ComponentFixture<DevopsvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopsvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
