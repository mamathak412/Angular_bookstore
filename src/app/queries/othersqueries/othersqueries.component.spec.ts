import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersqueriesComponent } from './othersqueries.component';

describe('OthersqueriesComponent', () => {
  let component: OthersqueriesComponent;
  let fixture: ComponentFixture<OthersqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
