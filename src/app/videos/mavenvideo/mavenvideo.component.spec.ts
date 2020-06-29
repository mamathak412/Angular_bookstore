import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenvideoComponent } from './mavenvideo.component';

describe('MavenvideoComponent', () => {
  let component: MavenvideoComponent;
  let fixture: ComponentFixture<MavenvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MavenvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MavenvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
