import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaqueriesComponent } from './javaqueries.component';

describe('JavaqueriesComponent', () => {
  let component: JavaqueriesComponent;
  let fixture: ComponentFixture<JavaqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
