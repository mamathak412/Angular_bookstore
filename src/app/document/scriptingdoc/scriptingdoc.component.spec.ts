import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptingDocComponent } from './scriptingdoc.component';

describe('ScriptingDocComponent', () => {
  let component: ScriptingDocComponent;
  let fixture: ComponentFixture<ScriptingDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptingDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptingDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
