import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialBoxComponent } from './editorial-box.component';

describe('EditorialBoxComponent', () => {
  let component: EditorialBoxComponent;
  let fixture: ComponentFixture<EditorialBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
