import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityModuleComponent } from './unity-module.component';

describe('UnityModuleComponent', () => {
  let component: UnityModuleComponent;
  let fixture: ComponentFixture<UnityModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
