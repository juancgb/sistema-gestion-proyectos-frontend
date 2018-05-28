import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
/** Services */
import { SedesService } from '../../../services/sedes/sedes.service';
import { ProgramasService } from '../../../services/programas/programas.service';
import { ProcesosService } from '../../../services/procesos/procesos.service';
import { MatDialog } from '@angular/material';
import { NewProcesoComponent } from '../../procesos/new-proceso/new-proceso.component';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html'
})
export class SedeComponent implements OnInit, OnDestroy {

  private sedeId: string;
  private sede: any;
  private programas: Array<any>;
  private procesos: Array<any>;
  private columnasProcesos: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private sedeService: SedesService,
    private programasService: ProgramasService,
    private procesosService: ProcesosService
  ) {
    this.columnasProcesos = ['id', 'name', 'career', 'actions'];
  }

  ngOnInit () {
    this.inicializacionVariableSede();
  }

  ngOnDestroy () {
  }

  private inicializacionVariableSede () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.route.params.subscribe(params => {
        this.sedeId = params['sedeId'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
      subs.unsubscribe();
      this.loadSede(this.sedeId);
      this.loadPorcesosPorSede(this.sedeId);
    }).catch(err => {
      subs.unsubscribe();
      console.error(err);
    });
  }

  private loadSede (id: string) {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.sedeService.show(id).subscribe((response: HttpResponse<any>) => {
        this.sede = response['body'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
      subs.unsubscribe();
    }).catch(err => {
      console.error(err);
    });
  }

  private loadProgramasPorSede (id: string) {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.programasService.find_by_office(id).subscribe((response: HttpResponse<any>) => {
        this.programas = response['body'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
      console.log(this.programas);
    }).catch(err => {
      console.error(err);
    });
  }

  private loadPorcesosPorSede (id: string) {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.procesosService.find_by_office(id)
      .subscribe((response: HttpResponse<any>) => {
        this.procesos = response['body'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
    }).catch(err => {
      console.error(err);
    });
  }

  public openNewProceso () {
    const newProceso = this.matDialog.open(NewProcesoComponent, {
      width: '700px',
      maxHeight: '700px'
    });
  }
}
