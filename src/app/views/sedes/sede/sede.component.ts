import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
/** Services */
import { SedesService } from '../../../services/sedes/sedes.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html'
})
export class SedeComponent implements OnInit, OnDestroy {

  private sedeId: string;
  private sede: any;

  constructor(
    private route: ActivatedRoute,
    private sedeService: SedesService
  ) {}

  ngOnInit () {
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
    }).catch(err => {
      subs.unsubscribe();
      console.error(err);
    });
  }

  ngOnDestroy () {
  }

  private loadSede(id: string) {
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
}
