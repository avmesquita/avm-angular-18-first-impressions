import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { nanoid } from 'nanoid';

export function headerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    
    const reqWithHeader = req.clone({
        headers: req.headers.set('X-Cache-Id', nanoid(36)),
    });    

    return next(reqWithHeader);
  }