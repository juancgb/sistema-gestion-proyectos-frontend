import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  /**
   * Esta funcion es culo de machete ya que las soluciones que entontraba en stackoverflow me explotaban
   * entonces me toco improvisar:
   *
   * Esta funcion se divide en dos grandes partes, las cositas que van de salida y las cositas que
   * vienen de entrada
   *
   * Cositas que van de salida:
   * Lo que se hace es instanciar una variable authRequest que es la que va a contener los headers que
   * queremos enviar, validamos que exista al menos uno de los headers (optimizacion que le llaman),
   * procedemos a establecer manualmente el Authorization con la palabra clave Bearer y el access-token
   * despues establecemos el resto de los headers (excepto 'user') mediante un ciclo, se hace una
   * segunda validacion para enviar el request manipulado o el request crudo y listo, se crea una
   * constante local para una futura validacion que se usara para otros propositos (vease: Cositas que
   * vienen de entrada) aunque esta igualmente se envia... y ya, eso es todo.
   *
   * Cositas que vienen de entrada:
   * En el parrafo anterior veniamos hablando de una constante local que se usaria en una validacion,
   * pues bien, aqui es la parte de esa tal validacion: lo que hacemos es primero suscribirnos (es
   * puta mierda pero que se le hace), validamos que el evento sea de tipo HttpResponse (de entrada)
   * para proceder a mapear los headesr y posteriormente empujarlos al localstorage para el siguiente
   * request
   *
   * @param request HttpRequesr<any> | las cositas que quieren salir
   * @param next HttpHandler | las cositas que de verdad van a salir
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authRequest: any;
    if (localStorage.getItem('access-token')) {
      authRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access-token'))
      });
      for (let n = 0; n < localStorage.length; n++) {
        const key = localStorage.key(n);
        if (key !== 'user') {
          authRequest = authRequest.clone({
            headers: authRequest.headers.set(key, localStorage.getItem(key))
          });
        }
      }
    }
    const result = next.handle(localStorage.getItem('access-token') !== null ? authRequest : request);
    result.subscribe((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event['headers'].keys().map(key => {
          if (event['headers'].get(key) !== '') {
            localStorage.setItem(key, event['headers'].get(key));
          }
        });
      }
    });
    return result;
  }
}
