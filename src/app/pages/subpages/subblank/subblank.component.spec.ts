import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubblankComponent } from './subblank.component';

describe('SubblankComponent', () => {
  let component: SubblankComponent;
  let fixture: ComponentFixture<SubblankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubblankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
