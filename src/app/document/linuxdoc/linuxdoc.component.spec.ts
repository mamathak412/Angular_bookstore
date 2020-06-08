import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxDocComponent } from './linuxdoc.component';

describe('LinuxComponent', () => {
  let component: LinuxDocComponent;
  let fixture: ComponentFixture<LinuxDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
