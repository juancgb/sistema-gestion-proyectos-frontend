import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../services/sedes/sedes.service';
import { HttpResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html'
})
export class SedesComponent implements OnInit {

  public sedes: Array<any>;
  public sedeSelected: any;
  public inEdit: boolean;
  public inDelete: boolean;

  constructor(
    private sedesService: SedesService
  ) {
    this.sedeSelected = null;
    this.inEdit = false;
    this.inDelete = false;
  }

  ngOnInit() {
    this.loadSedes();
  }

  /**
   * Carga las sedes, es invocado por el ngOnInit
   */
  private loadSedes () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.sedesService.index()
      .subscribe((response: HttpResponse<any>) => {
        this.sedes = response['body'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(value => {
      subs.unsubscribe();
    }).catch(err => {
      subs.unsubscribe();
      console.error('loadSedes()', err);
    });
  }

  /**
   * Se usa para cargar y buscar el elemento seleccionado
   * @param sede item proveniente del *ngFor del template
   */
  public selectSede (sede: any) {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.sedesService.show(sede.id + '')
      .subscribe((response: HttpResponse<any>) => {
        this.sedeSelected = response['body'];
        resolve();
      }, err => {
        reject(err);
      });
    }).then(value => {
      subs.unsubscribe();
    }).catch(err => {
      subs.unsubscribe();
      console.error('selectSede()', err);
    });
  }

  /**
   * Cancela la seleccion y cierra la edicion
   */
  public cancelSelection() {
    if (this.sedeSelected) {
      this.sedeSelected = null;
    }
    if (this.inEdit) {
      this.inEdit = false;
    }
    if (this.inDelete) {
      this.inDelete = false;
    }
  }

  /**
   * Habilita la edicion
   */
  public enableEdit () {
    this.inEdit = true;
    this.inDelete = this.inDelete ? false : this.inDelete;
  }

  /**
   * Manda a guardar el elemento al backend
   */
  public saveEdit () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.sedesService.updatePatch(this.sedeSelected['id'], this.sedeSelected)
      .subscribe(response => {
        resolve();
      }, err => {
        reject(err);
      });
    }).then(val => {
      this.findInSedesLocal(this.sedeSelected);
      subs.unsubscribe();
      this.cancelSelection();
    }).catch(err => {
      console.log('saveEdit()', err);
      this.cancelSelection();
    });
  }

  /**
   * Despues de recibir un response exitoso sobre la modificacion
   * de un elemento, lo busca mendiante el id y lo empuja en el
   * array local de nuevo
   */
  private findInSedesLocal (entity: any) {
    this.sedes.splice(this.sedes.findIndex(element => {
      return element['id'] === entity['id'];
    }), 1, entity);
  }

  /**
   * Habilita cuadro de dialogo para eliminacion de elementos
   */
  public enableDelete () {
    this.inDelete = true;
    this.inEdit = this.inEdit ? false : this.inEdit;
  }

}
