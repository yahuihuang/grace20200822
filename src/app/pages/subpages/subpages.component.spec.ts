import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpagesComponent } from './subpages.component';

describe('SubpagesComponent', () => {
  let component: SubpagesComponent;
  let fixture: ComponentFixture<SubpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
