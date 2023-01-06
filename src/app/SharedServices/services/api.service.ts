import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: any
  br : any
  fromIndicater : any = false;

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
    return this.http.post(baseUrl + `/authenticate`,data);
  }

  adminApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    this.fromIndicater = true;
    return this.http.get(baseUrl + `/forAdmin`,{ headers: this.getHeaders(br.headers.Authorization)} );
  }

  userApi(br: any): Observable<any>{
    console.log("i am server",br.headers.Authorization);
    this.fromIndicater = false;
    return this.http.get(baseUrl + `/forUser`,{ headers: this.getHeaders(br.headers.Authorization) });
  }



//.........................User Drop Down Apis..............................//
            

  getEntitieListApi():Observable<any>{
    console.log("getEntitieListApi token >>>", this.headers.Authorization);
      return this.http.get<any>(baseUrl + `/getEntities`,{ headers: this.getHeaders(this.headers.Authorization)});
    
  }
  getIndustryTypeListApi():Observable<any>{
   //console.log("headers >>>", this.headers);
    return this.http.get<any>(baseUrl + `/getIndustryType`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getLegalStructureListApi():Observable<any>{
   //console.log("headers >>>", this.headers);
    return this.http.get<any>(baseUrl + `/getLegalStructure`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getListingStatusListApi():Observable<any>{
   //console.log("headers >>>", this.headers);
    return this.http.get<any>(baseUrl + `/getListingStatus`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
  getStatusListApi():Observable<any>{
   //console.log("headers >>>", this.headers);
    return this.http.get<any>(baseUrl + `/getStates`,{ headers: this.getHeaders(this.headers.Authorization)});
  }
 // ................................................... 


//...........calculation API start .................
  calculationApi(formData: any){
    console.log("calculationApi--",formData)
    return this.http.post<any>(baseUrl + `/calculatePrice`,formData,{headers: this.getHeaders(this.headers.Authorization)});
  }
//................calculation API end ...........................




////////////// master data form///////////////////////////
getContentCustomizationDataApi():Observable<any>{
  
  return this.http.get<any>(baseUrl + `/getAllContentCustomization`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllContentUpdatesDataApi():Observable<any>{
  console.log("getAllContentUpdatesDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllContentUpdates`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllCustomerSupportDataApi():Observable<any>{
  
  return this.http.get<any>(baseUrl + `/getAllCustomerSupport`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllAppManagementDatApi():Observable<any>{
  console.log("getAllAppManagementDatApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllAppManagement`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllHostingChargesDatApi():Observable<any>{
  console.log("getAllHostingChargesDatApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllHostingCharges`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllSoftwareUpdatesDataApi():Observable<any>{
  console.log("getAllSoftwareUpdatesDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllSoftwareUpdates`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllDevelopmentAndCostDataApi():Observable<any>{
  console.log("getAllDevelopmentAndCostDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllDevelopmentAndCost`,{headers: this.getHeaders(this.headers.Authorization)});
}
getAllMarketingSpendDataApi():Observable<any>{
  console.log("getAllMarketingSpendDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getAllMarketingSpend`,{headers: this.getHeaders(this.headers.Authorization)});
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.......................Master Data update APi call......................

updateContentCustomizationDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateContentCustomization`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

updateUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateContentUpdates`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

customerSupportDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateCustomerSupport`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

hostingChargeDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateHostingCharges`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

softwerDevDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateDevelopmentAndCost`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

softwerUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateSoftwareUpdates`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}

markatingUpdateDataApi(formData: any): Observable<any>{
  console.log("-+-",formData)
  return this.http.put<any>(baseUrl + `/updateMarketingSpend`, formData,{headers: this.getHeaders(this.headers.Authorization)});
}



// get congetCreationTimeFunction................
getCreationTimeFunction(){
  return this.http.get<any>(baseUrl + `/getCreationTime`,{headers: this.getHeaders(this.headers.Authorization)});
}
// update........
updateCalculationTimeData(fromData: any):Observable<any>{
  console.log("plpl",fromData)
  return this.http.put<any>(baseUrl + `/updateCreationTime`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}
//.........................AdminDataGetApi..........................
getAdminData(): Observable<any>{
  return this.http.get<any>(baseUrl + `/getParticularsDetails`,{headers: this.getHeaders(this.headers.Authorization)});
}

//.. Admin Data Update......
updateAdminData(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateParticularsDetails`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}




















//.............................Sheet9-GET DATA.......................................

getHeadCountDataApi():Observable<any>{
  console.log("getCompanyTypeDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getHeadcount`,{headers: this.getHeaders(this.headers.Authorization)});
}

getCompanyTypeDataApi():Observable<any>{
  console.log("getCompanyTypeDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getCompanyType`,{headers: this.getHeaders(this.headers.Authorization)});
}

getLegalStractureDataApi():Observable<any>{
  console.log("getLegalStractureDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getLegalStructure`,{headers: this.getHeaders(this.headers.Authorization)});
}

getCompanyRevenueDataApi():Observable<any>{
  console.log("getCompanyRevenueDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getCompanyRevenue`,{headers: this.getHeaders(this.headers.Authorization)});
}

getEntitiesDataApi():Observable<any>{
  console.log("getEntitiesDataApi----",{headers: this.getHeaders(this.headers.Authorization)});
  return this.http.get<any>(baseUrl + `/getEntities`,{headers: this.getHeaders(this.headers.Authorization)});
}



//...................Update APIS.............Sheet9.......

updateCompanyTypeDataUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateCompanyType`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

companyRevenueUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateCompanyRevenue`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

entitiesDataUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateEntities`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

typeOfIndustryDataUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateIndustryType`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

StatesDataUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateStates`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

listingUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateListingStatus`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

headCountUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateHeadcount`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

legalStractureUpdateApi(fromData: any):Observable<any>{
  return this.http.put<any>(baseUrl + `/updateLegalStructure`,fromData,{headers: this.getHeaders(this.headers.Authorization)});
}

}