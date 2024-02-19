import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumsHttpContext } from './enums/albums-http-context.enum';
import { ReqType } from './tokens/http-context-token';
import { PostHttpContext } from './enums/posts-http-context.enum';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const httpContexts = [
      ...Object.values(AlbumsHttpContext),
      ...Object.values(PostHttpContext),
    ];
    if (httpContexts.find((x) => x === request.context.get(ReqType))) {
      const apiRequest = request.clone({
        url: `${this.baseUrl}${request.url}`,
      });
      return next.handle(apiRequest);
    } else {
      return next.handle(request);
    }
  }
}
