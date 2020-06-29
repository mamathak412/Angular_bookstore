import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptingvideoComponent } from './scriptingvideo.component';

describe('ScriptingvideoComponent', () => {
  let component: ScriptingvideoComponent;
  let fixture: ComponentFixture<ScriptingvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptingvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptingvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
