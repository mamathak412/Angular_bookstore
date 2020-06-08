import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDocComponent } from './javadoc.component';

describe('JavaDocComponent', () => {
  let component: JavaDocComponent;
  let fixture: ComponentFixture<JavaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
