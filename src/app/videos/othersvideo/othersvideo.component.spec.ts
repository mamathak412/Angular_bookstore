import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersvideoComponent } from './othersvideo.component';

describe('OthersvideoComponent', () => {
  let component: OthersvideoComponent;
  let fixture: ComponentFixture<OthersvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
