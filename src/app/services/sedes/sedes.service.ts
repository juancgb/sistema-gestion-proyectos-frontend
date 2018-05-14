import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class SedesService {

  private SEDES = '/api/v1/offices';

  constructor(
    private api: ApiService
  ) { }

  public index () {
    this.api.get(this.SEDES);
  }

  public create (entity: any) {
    this.api.post(this.SEDES, entity);
  }

  public show (id: string) {
    this.api.get(this.SEDES + '/' + id);
  }

  public updatePatch (id: string, entity: any) {
    this.api.patch(this.SEDES + '/' + id, entity);
  }

  public updatePut (id: string, entity: any) {
    this.api.put(this.SEDES + '/' + id, entity);
  }

  public destroy (id: string) {
    this.api.delete(this.SEDES + '/' + id);
  }
}
