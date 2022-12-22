import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: any
  br : any
  constructor(private http : HttpClient) { }

  private getHeaders(token: any): HttpHeaders{
     this.headers = {
      "Authorization" : token, 
      "Accept": 'text/html, application/xhtml+xml, */*', 
      "Content-Type": 'text/html; charset=utf-8',
    }
    console.log("header token--on service page---",this.headers);
    return new HttpHeaders(this.headers)
  }
  
  loginApi(data: any): Observable<any>{
    console.log("i am server",data);
    return this.http.post(`http://172.16.0.196:8080/authenticate`,data);
  }

  adminApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    return this.http.get(`http://172.16.0.196:8080/forAdmin`,{ headers: {"Authorization" : br.headers.Authorization} });
  }

  userApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    return this.http.get(`http://172.16.0.196:8080/forUser`,{ headers: this.getHeaders(br.headers.Authorization) });
  }



 //.........................User Drop Down Apis..............................//
            

  getEntitieListApi():Observable<any>{
    console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://172.16.0.196:8080/getEntites`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getIndustryTypeListApi():Observable<any>{
    console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://172.16.0.196:8080/getIndustryType`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getLegalStructureListApi():Observable<any>{
    console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://172.16.0.196:8080/getLegalStructure`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getListingStatusListApi():Observable<any>{
    console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://172.16.0.196:8080/getListingStatus`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getStatusListApi():Observable<any>{
    console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://172.16.0.196:8080/getStates`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  // ...................................................


}
