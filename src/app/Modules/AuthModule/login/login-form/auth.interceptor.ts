import { HttpHandler, HttpInterceptor, HttpRequest, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: ApiService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req);
    }
}