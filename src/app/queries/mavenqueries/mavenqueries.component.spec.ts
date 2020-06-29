import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenqueriesComponent } from './mavenqueries.component';

describe('MavenqueriesComponent', () => {
  let component: MavenqueriesComponent;
  let fixture: ComponentFixture<MavenqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MavenqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MavenqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
