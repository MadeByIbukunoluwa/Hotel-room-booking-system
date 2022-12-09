import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers : new HttpHeaders({ token: '4hfeweoewkxowex39240' }),
      });
      return next.handle(newRequest);
    }
    // return next.handle(request);
    return next.handle(request);
  }
}
