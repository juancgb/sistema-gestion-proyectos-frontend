import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../constantes/endpoints';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get (path: string) {
    return this.httpClient.get(Endpoints.local + path, { observe: 'response' });
  }

  public post (path: string, entity: any) {
    return this.httpClient.post(Endpoints.local + path, entity, { observe: 'response' });
  }

  public patch (path: string, entity: any) {
    return this.httpClient.patch(Endpoints.local + path, entity, { observe: 'response' });
  }

  public put (path: string, entity: any) {
    return this.httpClient.put(Endpoints.local + path, entity, { observe: 'response' });
  }

  public delete (path: string) {
    return this.httpClient.delete(Endpoints.local + path, { observe: 'response' });
  }

}
