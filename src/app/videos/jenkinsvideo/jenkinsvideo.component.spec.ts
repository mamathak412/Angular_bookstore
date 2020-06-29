import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsvideoComponent } from './jenkinsvideo.component';

describe('JenkisvideoComponent', () => {
  let component: JenkinsvideoComponent;
  let fixture: ComponentFixture<JenkinsvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
