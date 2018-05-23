import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
/** Services */
import { SedesService } from '../../../services/sedes/sedes.service';
import { ProgramasService } from '../../../services/programas/programas.service';
import { ProcesosService } from '../../../services/procesos/procesos.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html'
})
export class SedeComponent implements OnInit, OnDestroy {

  private sedeId: string;
  private sede: any;
  private programas: Array<any>;
  private procesos: Array<any>;

  private visualizacionFormPrograma: boolean;
  private visualizacionFormProceso: boolean;

  private formPrograma: {
    name: string,
    status: boolean
  };
  private formProceso: {
    name: string,
    career_id: any,
    office_id: any
  };

  constructor(
    private route: ActivatedRoute,
    private sedeService: SedesService,
    private programaService: ProgramasService,
    private procesoService: ProcesosService
  ) {}

  ngOnInit () {
    this.visualizacionFormPrograma = false;
    this.visualizacionFormProceso = false;
    this.inicializacionVariableSede();
  }

  ngOnDestroy () {
  }

  private buildFormPrograma () {
    this.formPrograma = {
      name: '',
      status: false
    };
  }

  private buildFormProceso () {
    this.formProceso = {
      name: '',
      career_id: '',
      office_id: this.sedeId
    };
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
      this.loadProgramas();
      this.loadProcesos();
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

  private loadProgramas () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.programaService.indexProgramas().subscribe((response: HttpResponse<any>) => {
        this.programas = response['body'];
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

  private loadProcesos () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.procesoService.index().subscribe((response: HttpResponse<any>) => {
        this.procesos = response['body'];
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

  public crearPrograma () {
    this.visualizacionFormPrograma = true;
    this.buildFormPrograma();
  }

  public crearProceso () {
    this.visualizacionFormProceso = true;
    this.buildFormProceso();
  }

  public cancelarPrograma () {
    this.visualizacionFormPrograma = false;
  }

  public cancelarProceso () {
    this.visualizacionFormProceso = false;
  }

  public guardarPrograma () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.programaService.createPrograma(this.formPrograma).subscribe((response: HttpResponse<any>) => {
        this.formPrograma = {
          name: '',
          status: false
        };
        resolve();
      }, err => {
        this.formPrograma = {
          name: '',
          status: false
        };
        reject(err);
      });
    }).then(val => {
      subs.unsubscribe();
      this.loadProgramas();
      this.buildFormPrograma();
      this.cancelarPrograma();
    }).catch(err => {
      console.error(err);
      subs.unsubscribe();
      this.buildFormPrograma();
    });
  }

  public guardarProceso () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      // tslint:disable-next-line:radix
      this.formProceso['career_id'] = parseInt(this.formProceso.career_id);
      subs = this.procesoService.create(this.formProceso).subscribe((response: HttpResponse<any>) => {
        this.loadProcesos();
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
      subs.unsubscribe();
      this.loadProcesos();
      this.buildFormProceso();
      this.cancelarProceso();
    }).catch(err => {
      console.error(err);
      subs.unsubscribe();
      this.buildFormProceso();
    });
  }
}
