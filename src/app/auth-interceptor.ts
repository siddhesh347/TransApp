import { HttpInterceptor } from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(public auth:LoginserviceService){ }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>>{
            const token=localStorage.getItem("accesstoken");
            
            if(token){
                const cloned=req.clone({
                   // headers:req.headers.set("Auhthorization","Bearer"+token)
                   headers:req.headers.set("Content-Type","application/json")
                });
                return next.handle(cloned);
            }
            else{
                return next.handle(req);
            }

        }
}
