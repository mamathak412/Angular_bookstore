import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavavideoComponent } from './javavideo.component';

describe('JavavideoComponent', () => {
  let component: JavavideoComponent;
  let fixture: ComponentFixture<JavavideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavavideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavavideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
