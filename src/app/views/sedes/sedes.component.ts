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

  constructor(
    private sedesService: SedesService
  ) { }

  ngOnInit() {
    let subs: Subscription = this.sedesService.index()
    .subscribe((response: HttpResponse<any>) => {
      this.sedes = response['body']['data'];
    }, err => {
    }, () => {
      console.log(this.sedes);
    });

  }

}
