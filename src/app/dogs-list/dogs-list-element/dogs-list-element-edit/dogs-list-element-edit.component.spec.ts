import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListElementEditComponent } from './dogs-list-element-edit.component';

describe('DogsListElementEditComponent', () => {
  let component: DogsListElementEditComponent;
  let fixture: ComponentFixture<DogsListElementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsListElementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListElementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
