import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueViewingComponent } from './continue-viewing.component';

describe('ContinueViewingComponent', () => {
  let component: ContinueViewingComponent;
  let fixture: ComponentFixture<ContinueViewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueViewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
