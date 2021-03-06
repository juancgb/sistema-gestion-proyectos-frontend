import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class RolesService {

  private ROLES = '/api/v1/roles';

  constructor(
    private api: ApiService
  ) { }

  public index () {
    return this.api.get(this.ROLES);
  }

  public create (entity: any) {
    return this.api.post(this.ROLES, entity);
  }

  public show (id: string) {
    return this.api.get(this.ROLES + '/' + id);
  }

  public updatePatch (id: string, entity: any) {
    return this.api.patch(this.ROLES + '/' + id, entity);
  }

  public updatePut (id: string, entity: any) {
    return this.api.put(this.ROLES + '/' + id, entity);
  }

  public destroy (id: string) {
    return this.api.delete(this.ROLES + '/' + id);
  }

}
