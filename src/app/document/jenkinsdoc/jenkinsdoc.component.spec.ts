import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsDocComponent } from './jenkinsdoc.component';

describe('JenkinsDocComponent', () => {
  let component: JenkinsDocComponent;
  let fixture: ComponentFixture<JenkinsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
