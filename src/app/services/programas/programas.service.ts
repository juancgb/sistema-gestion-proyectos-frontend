import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class ProgramasService {

  private PROGRAMAS = '/api/v1/careers';

  constructor(
    private api: ApiService
  ) { }

  public index () {
    return this.api.get(this.PROGRAMAS);
  }

  public find_by_office (id: string) {
    return this.api.get(this.PROGRAMAS + '/find_by_office?office_id=' + id);
  }

  public create (entity: any) {
    return this.api.post(this.PROGRAMAS, entity);
  }

  public show (id: string) {
    return this.api.get(this.PROGRAMAS + '/' + id);
  }

  public updatePatch (id: string, entity: any) {
    return this.api.patch(this.PROGRAMAS + '/' + id, entity);
  }

  public updatePut (id: string, entity: any) {
    return this.api.put(this.PROGRAMAS + '/' + id, entity);
  }

  public destroy (id: string) {
    return this.api.delete(this.PROGRAMAS + '/' + id);
  }

}

/*
api_v1_careers        GET      /api/v1/careers(.:format)                          api/v1/careers#index {:format=>:json}
                      POST     /api/v1/careers(.:format)                          api/v1/careers#create {:format=>:json}
api_v1_career         GET      /api/v1/careers/:id(.:format)                      api/v1/careers#show {:format=>:json}
                      PATCH    /api/v1/careers/:id(.:format)                      api/v1/careers#update {:format=>:json}
                      PUT      /api/v1/careers/:id(.:format)                      api/v1/careers#update {:format=>:json}
                      DELETE   /api/v1/careers/:id(.:format)                      api/v1/careers#destroy {:format=>:json}
api_v1_office_careers POST     /api/v1/office_careers(.:format)                   api/v1/office_careers#create {:format=>:json}
api_v1_office_career  PATCH    /api/v1/office_careers/:id(.:format)               api/v1/office_careers#update {:format=>:json}
                      PUT      /api/v1/office_careers/:id(.:format)               api/v1/office_careers#update {:format=>:json}
                      DELETE   /api/v1/office_careers/:id(.:format)               api/v1/office_careers#destroy {:format=>:json}
*/
