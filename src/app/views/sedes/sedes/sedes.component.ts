import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../../services/sedes/sedes.service';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { NewSedeComponent } from '../new-sede/new-sede.component';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html'
})
export class SedesComponent implements OnInit {

  public sedes: Array<any>;
  public columnas: Array<string>;

  constructor(
    private matDialog: MatDialog,
    private sedesService: SedesService
  ) {
    this.columnas = ['id', 'name', 'status', 'actions'];
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

  public openNewSede () {
    const newSede = this.matDialog.open(NewSedeComponent, {
      width: '600px'
    });
    newSede.afterClosed().subscribe(result => {
      this.loadSedes();
    });
  }

}
