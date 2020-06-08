import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenDocComponent } from './mavendoc.component';

describe('MavenDocComponent', () => {
  let component: MavenDocComponent;
  let fixture: ComponentFixture<MavenDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MavenDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MavenDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
