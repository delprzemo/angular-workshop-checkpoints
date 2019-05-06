import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListElementComponent } from './dogs-list-element.component';

describe('DogsListElementComponent', () => {
  let component: DogsListElementComponent;
  let fixture: ComponentFixture<DogsListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
