import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSedeComponent } from './new-sede.component';

describe('NewSedeComponent', () => {
  let component: NewSedeComponent;
  let fixture: ComponentFixture<NewSedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
