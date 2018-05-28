import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class ProcesosService {

  private PROCESOS = '/api/v1/project_processes';

  constructor(
    private api: ApiService
  ) { }

  public index () {
    return this.api.get(this.PROCESOS);
  }

  public find_by_office (id: string) {
    return this.api.get(this.PROCESOS + '/find_by_office?office_id=' + id );
  }

  public create (entity: any) {
    return this.api.post(this.PROCESOS, entity);
  }

  public show (id: string) {
    return this.api.get(this.PROCESOS + '/' + id);
  }

  public updatePatch (id: string, entity: any) {
    return this.api.patch(this.PROCESOS + '/' + id, entity);
  }

  public updatePut (id: string, entity: any) {
    return this.api.put(this.PROCESOS + '/' + id, entity);
  }

  public destroy (id: string) {
    return this.api.delete(this.PROCESOS + '/' + id);
  }

}

/*
api_v1_project_processes  GET      /api/v1/project_processes(.:format)                api/v1/project_processes#index {:format=>:json}
                          POST     /api/v1/project_processes(.:format)                api/v1/project_processes#create {:format=>:json}
api_v1_project_process    GET      /api/v1/project_processes/:id(.:format)            api/v1/project_processes#show {:format=>:json}
                          PATCH    /api/v1/project_processes/:id(.:format)            api/v1/project_processes#update {:format=>:json}
                          PUT      /api/v1/project_processes/:id(.:format)            api/v1/project_processes#update {:format=>:json}
                          DELETE   /api/v1/project_processes/:id(.:format)            api/v1/project_processes#destroy {:format=>:json}
*/
