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

  constructor(
    private sedesService: SedesService
  ) {
  }

  ngOnInit() {
    this.loadSedes();
  }

  private loadSedes () {
    let subs: Subscription;
    const promise: Promise<any> = new Promise((resolve, reject) => {
      subs = this.sedesService.index()
      .subscribe((response: HttpResponse<any>) => {
        this.sedes = response['body'];
        resolve();
      });
    });
    promise.then(value => {
      subs.unsubscribe();
    });
  }

  public selectSede (sede: any) {
    let subs: Subscription;
    const promise: Promise<any> = new Promise((resolve, reject) => {
      subs = this.sedesService.show(sede.id + '')
      .subscribe((response: HttpResponse<any>) => {
        this.sedeSelected = response['body'];
        resolve();
      });
    });
    promise.then(value => {
      subs.unsubscribe();
      console.log(this.sedeSelected);
    });
  }

}
