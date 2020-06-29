import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxqueriesComponent } from './linuxqueries.component';

describe('LinuxqueriesComponent', () => {
  let component: LinuxqueriesComponent;
  let fixture: ComponentFixture<LinuxqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
