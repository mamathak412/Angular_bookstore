import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsqueriesComponent } from './awsqueries.component';

describe('AwsqueriesComponent', () => {
  let component: AwsqueriesComponent;
  let fixture: ComponentFixture<AwsqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
