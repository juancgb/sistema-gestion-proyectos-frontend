import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcesoComponent } from './new-proceso.component';

describe('NewProcesoComponent', () => {
  let component: NewProcesoComponent;
  let fixture: ComponentFixture<NewProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
