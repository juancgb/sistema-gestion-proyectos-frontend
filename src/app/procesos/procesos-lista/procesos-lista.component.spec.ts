import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosListaComponent } from './procesos-lista.component';

describe('ProcesosListaComponent', () => {
  let component: ProcesosListaComponent;
  let fixture: ComponentFixture<ProcesosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
