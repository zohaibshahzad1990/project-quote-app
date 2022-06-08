import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlineitemComponent } from './addlineitem.component';

describe('AddlineitemComponent', () => {
  let component: AddlineitemComponent;
  let fixture: ComponentFixture<AddlineitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlineitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
