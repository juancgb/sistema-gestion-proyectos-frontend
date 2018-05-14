import { HttpRequest } from '@angular/common/http';

export class InterceptorService {

  constructor() { }

  intercept(request: HttpRequest<any>, next) {
    const authRequest = request.clone({
      headers: request.headers.set(
        'Authorization', 'Bearer ' + localStorage.getItem('token')
      )
    });
    return next.handle(localStorage.getItem('token') !== null ? authRequest : request);
  }
}
