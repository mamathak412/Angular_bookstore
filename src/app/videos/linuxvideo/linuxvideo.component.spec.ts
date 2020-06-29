import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxvideoComponent } from './linuxvideo.component';

describe('LinuxvideoComponent', () => {
  let component: LinuxvideoComponent;
  let fixture: ComponentFixture<LinuxvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
