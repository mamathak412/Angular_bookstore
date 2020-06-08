import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDocComponent } from './othersdoc.component';

describe('OthersDocComponent', () => {
  let component: OthersDocComponent;
  let fixture: ComponentFixture<OthersDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
