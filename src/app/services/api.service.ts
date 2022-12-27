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
    }
    console.log("header token--on service page---",this.headers.Authorization);
    return new HttpHeaders(this.headers)
  }
  
  loginApi(data: any): Observable<any>{
    console.log("i am server",data);
    return this.http.post(`http://localhost:8080/authenticate`,data);
  }

  adminApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    return this.http.get(`http://localhost:8080/forAdmin`,{ headers: this.getHeaders(br.headers.Authorization) });
  }

  userApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    return this.http.get(`http://localhost:8080/forUser`,{ headers: this.getHeaders(br.headers.Authorization) });
  }



 //.........................User Drop Down Apis..............................//
            

  getEntitieListApi():Observable<any>{
    console.log("getEntitieListApi token >>>", this.headers.Authorization);
    return this.http.get<any>(`http://localhost:8080/getEntities`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getIndustryTypeListApi():Observable<any>{
    //console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://localhost:8080/getIndustryType`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getLegalStructureListApi():Observable<any>{
    //console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://localhost:8080/getLegalStructure`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getListingStatusListApi():Observable<any>{
    //console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://localhost:8080/getListingStatus`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getStatusListApi():Observable<any>{
    //console.log("headers >>>", this.headers);
    return this.http.get<any>(`http://localhost:8080/getStates`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  // ................................................... 


//...........calculation API start .................
  calculationApi(formData: any){
    console.log("calculationApi--",formData)
    return this.http.post<any>(`http://localhost:8080/calculatePrice`,formData,{headers: this.getHeaders(this.headers.Authorization)});
  }
//................calculation API end ...........................




////////////// master data form ///////////////////////////
getContentCustomizationDataApi():Observable<any>{
  
  return this.http.get<any>(`http://localhost:8080/getAllContentCustomization`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllContentUpdatesDataApi():Observable<any>{
  console.log("getAllContentUpdatesDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllContentUpdates`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllCustomerSupportDataApi():Observable<any>{
  
  return this.http.get<any>(`http://localhost:8080/getAllCustomerSupport`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllAppManagementDatApi():Observable<any>{
  console.log("getAllAppManagementDatApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllAppManagement`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllHostingChargesDatApi():Observable<any>{
  console.log("getAllHostingChargesDatApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllHostingCharges`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllSoftwareUpdatesDataApi():Observable<any>{
  console.log("getAllSoftwareUpdatesDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllSoftwareUpdates`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllDevelopmentAndCostDataApi():Observable<any>{
  console.log("getAllDevelopmentAndCostDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllDevelopmentAndCost`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllMarketingSpendDataApi():Observable<any>{
  console.log("getAllMarketingSpendDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(`http://localhost:8080/getAllMarketingSpend`,{headers: this.getHeaders(this.headers.Authorization)});
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.......................Master Data update APi call......................

updateContentCustomizationDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateContentCustomization`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

updateUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateContentUpdates`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

customerSupportDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateCustomerSupport`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

hostingChargeDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateHostingCharges`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

softwerDevDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateDevelopmentAndCost`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

softwerUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateSoftwareUpdates`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

markatingUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(`http://localhost:8080/updateMarketingSpend`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}




//.........................AdminDataGetApi..........................
getAdminData(): Observable<any>{
  return this.http.get<any>(`http://localhost:8080/getParticularsDetails`,{headers: this.getHeaders(this.headers.Authorization)});
}

//.. Admin Data Update......
updateAdminData(fromData: any):Observable<any>{
  return this.http.put<any>(`http://localhost:8080/updateParticularsDetails`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

}

