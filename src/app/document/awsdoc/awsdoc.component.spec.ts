import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsDocComponent } from './awsdoc.component';

describe('AwsDocComponent', () => {
  let component: AwsDocComponent;
  let fixture: ComponentFixture<AwsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
