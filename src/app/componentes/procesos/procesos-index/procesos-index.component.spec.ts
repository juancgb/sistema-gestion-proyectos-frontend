import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosIndexComponent } from './procesos-index.component';

describe('ProcesosIndexComponent', () => {
  let component: ProcesosIndexComponent;
  let fixture: ComponentFixture<ProcesosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
