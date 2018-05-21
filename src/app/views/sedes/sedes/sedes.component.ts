import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../../services/sedes/sedes.service';
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

}
