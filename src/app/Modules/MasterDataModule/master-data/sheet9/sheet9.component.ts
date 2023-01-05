import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/SharedServices/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet9',
  templateUrl: './sheet9.component.html',
  styleUrls: ['./sheet9.component.css']
})
export class Sheet9Component implements OnInit {

  panelOpenState = false;

  CompanyType:any=[];
  LegalStracture:any=[];
  CompanyRevenue:any=[];
  Entities:any=[];
  HeadCount: any=[];


  public companyTypeFormGroup!: FormGroup;
  public CompanyRevenueFormGroup!: FormGroup;
  public LegalStractureFormGroup!: FormGroup;
  public EntitiesFormGroup!: FormGroup;
  public HeadCountGroup!: FormGroup;
  


  constructor(private apiService:ApiService, public FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.initCompanyTypeFrom();
    this.initCompanyRevenueFrom();
    this.initLegalStractureForm();
    this.iniEntitiesForm();
    this.initHeadCountForm();


    this.getCompanyTypeData();
    this.getLegalStractureData();
    this.getCompanyRevenueData();
    this.getEntitiesData();
    this.getHeadCountData();
  }

  resetFrom(){
    console.log("resetFrom--");
    this.ngOnInit();
  }

  sheet1(){
    this.router.navigate(['masterDataForm']);
  }
  sheet3(){
    this.router.navigate(['admin']);
  }

/////////////////////////////Get Functions//////////////////////////////////////////

getHeadCountData(){
  this.apiService.getHeadCountDataApi().subscribe(res=>{
  console.log("HeadCount-Sheet9-",res);
  this.HeadCount = res;
  this.generateHeadCountFormData(this.HeadCount);
  })
}

  getCompanyTypeData(){
    this.apiService.getCompanyTypeDataApi().subscribe(res=>{
    console.log("Sheet9-CompanyType-",res.value);
    this.CompanyType = res;
    this.generateCompanyTypeFormData(this.CompanyType);
    })
  }

  getLegalStractureData(){
    this.apiService.getLegalStractureDataApi().subscribe(res=>{
      console.log("Sheet9-LegalStracture-",res.value);
      this.LegalStracture = res;
      this.generateLegalStractureFormData(this.LegalStracture);
    })
  }

  getCompanyRevenueData(){
    this.apiService.getCompanyRevenueDataApi().subscribe(res=>{
      console.log("Sheet9-getCompanyRevenueData-",res.value);
      this.CompanyRevenue = res;
      this.generateCompanyRevenueFormData(this.CompanyRevenue);
    })
  }
  getEntitiesData(){
    this.apiService.getEntitiesDataApi().subscribe(res=>{
      console.log("Sheet9-getEntitiesData-",res.value);
      this.Entities = res;
      this.generateEntitesFormData(this.Entities);
    })
  }






//.........genrate Form Data...... CompanyType..........

  initCompanyTypeFrom(){
    this.companyTypeFormGroup = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
    companyTypes: this.FormBuilder.array([])
    })
  }
  
  getFormGroup(formSingleData:any){
    return this.FormBuilder.group({
      companyTypeId: [formSingleData.companyTypeId],
      companyTypeName: [formSingleData.companyTypeName],
      companyTypeValue: [formSingleData.companyTypeValue]
      });
  }


  generateCompanyTypeFormData(formDta:any){
    let dataContener = this.companyTypeArray;
    console.log("jjjjjjjjjj--",formDta);
    for(let i=0;i<formDta.length;i++){
      dataContener.push(this.getFormGroup(formDta[i]));
    }
    console.log("y--",this.companyTypeArray);  
  }

  get companyTypeArray(){
    return this.companyTypeFormGroup.get('companyTypes') as FormArray;
  }

  //......................Revenue.............

  initCompanyRevenueFrom(){
    this.CompanyRevenueFormGroup = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
    companyRevenues: this.FormBuilder.array([])
    })
  }
  
  companyRevenueFormGroup(formSingleData:any){
    return this.FormBuilder.group({
      revenueId: [formSingleData.revenueId],
      revenueRange: [formSingleData.revenueRange],
      revenueRangeValue: [formSingleData.revenueRangeValue]
      });
  }


  generateCompanyRevenueFormData(formDta:any){
    let dataContener = this.companyRevenueArray;
    console.log("jjjjjjjjjj--",formDta);
    for(let i=0;i<formDta.length;i++){
      dataContener.push(this.companyRevenueFormGroup(formDta[i]));
    }
    console.log("x--",this.companyRevenueArray);  
  }

  get companyRevenueArray(){
    return this.CompanyRevenueFormGroup.get('companyRevenues') as FormArray;
  }

  //...........legal Stracture....................

  initLegalStractureForm(){
    this.LegalStractureFormGroup = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
    legalStructures: this.FormBuilder.array([])
    })
  }
  
  legalStractureFormGroup(formSingleData:any){
    return this.FormBuilder.group({
      structureId: [formSingleData.structureId],
      structureType: [formSingleData.structureType],
      structureValue: [formSingleData.structureValue]
      });
  }


  generateLegalStractureFormData(formDta:any){
    let dataContener = this.legalStractureArray;
    console.log("jjjjjjjjjj--",formDta);
    for(let i=0;i<formDta.length;i++){
      dataContener.push(this.legalStractureFormGroup(formDta[i]));
    }
    console.log("l--",this.legalStractureArray);  
  }

  get legalStractureArray(){
    return this.LegalStractureFormGroup.get('legalStructures') as FormArray;
  }

  //.........................Entity.............................

  iniEntitiesForm(){
    this.EntitiesFormGroup = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
    entities: this.FormBuilder.array([])
    })
  }
  
  entitiesFormGroup(formSingleData:any){
    return this.FormBuilder.group({
      entityId: [formSingleData.entityId],
      entityRange: [formSingleData.entityRange],
      entityRangeValue: [formSingleData.entityRangeValue]
      });
  }


  generateEntitesFormData(formDta:any){
    let dataContener = this.entitiesArray;
    console.log("jjjjjjjjjj--",formDta);
    for(let i=0;i<formDta.length;i++){
      dataContener.push(this.entitiesFormGroup(formDta[i]));
    }
    console.log("e--",this.entitiesArray);  
  }

  get entitiesArray(){
    return this.EntitiesFormGroup.get('entities') as FormArray;
  }


//........................HeadCount.........................

initHeadCountForm(){
  this.HeadCountGroup = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  headcounts: this.FormBuilder.array([])
  })
}

HeadCountFromGroup(formSingleData:any){
  return this.FormBuilder.group({
    headcountId: [formSingleData.headcountId],
    headcountRange: [formSingleData.headcountRange],
    headcountRangeValue: [formSingleData.headcountRangeValue]
    });
}


generateHeadCountFormData(formDta:any){
  let dataContener = this.headCountArray;
  console.log("jjjjjjjjjj--",formDta);
  for(let i=0;i<formDta.length;i++){
    dataContener.push(this.HeadCountFromGroup(formDta[i]));
  }
  console.log("h--",this.headCountArray);  
}

get headCountArray(){
  return this.HeadCountGroup.get('headcounts') as FormArray;
}







//.................UPDATE API CALLS..........................

companyTypeUpdate(dataForm: any){
  console.log("calculationForm--",dataForm.value);
  this.apiService.updateCompanyTypeData(dataForm.value).subscribe(res=>{
      if(res){
        this.getCompanyTypeData();
        this.initCompanyTypeFrom();
      }
    })

  }

  entitiesUpdate(dataForm: any){
    console.log("entitiesUpdate--",dataForm.value);
    this.apiService.entitiesData(dataForm.value).subscribe(res=>{
        if(res){
          this.getCompanyTypeData();
          this.initCompanyTypeFrom();
        }
      })
  
    }


}
