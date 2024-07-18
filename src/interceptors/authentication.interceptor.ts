import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { authenticationService } from "../services/authentication.service";

export function authenticationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = inject(authenticationService).getAuthenticationToken();

  const reqWithToken = req.clone({
    headers: req.headers.set('X-Authentication-Token', authToken),
  });

 return next(reqWithToken);
}