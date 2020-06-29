import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueriesComponent } from './addqueries.component';

describe('AddqueriesComponent', () => {
  let component: AddqueriesComponent;
  let fixture: ComponentFixture<AddqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
