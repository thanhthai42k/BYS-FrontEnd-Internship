import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
export class AuthInterceptor {
    constructor(private authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.isLoggedIn()) {
            const authToken = this.authService.getAuthorizationToken();
            req = req.clone({
                setHeaders:
                    { Authorization: authToken }
                }
            );
        }
        
        return next.handle(req);
    }
}

