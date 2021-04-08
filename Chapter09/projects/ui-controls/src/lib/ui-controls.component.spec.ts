import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiControlsComponent } from './ui-controls.component';

describe('UiControlsComponent', () => {
  let component: UiControlsComponent;
  let fixture: ComponentFixture<UiControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
