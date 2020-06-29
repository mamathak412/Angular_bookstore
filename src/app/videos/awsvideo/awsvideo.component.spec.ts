import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsvideoComponent } from './awsvideo.component';

describe('AwsvideoComponent', () => {
  let component: AwsvideoComponent;
  let fixture: ComponentFixture<AwsvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
