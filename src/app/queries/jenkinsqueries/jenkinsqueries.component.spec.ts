import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsqueriesComponent } from './jenkinsqueries.component';

describe('JenkinsqueriesComponent', () => {
  let component: JenkinsqueriesComponent;
  let fixture: ComponentFixture<JenkinsqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
