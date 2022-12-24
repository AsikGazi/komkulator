import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

// export interface PeriodicElement {
//   resourceMix: string;
//   resourceName: number;
//   ratio: number;
//   numberOfMenDays: number;
//   menMonth: number ;
//   monthlyCtc: number ;
//   total: number ;
// }

@Component({
  selector: 'app-master-data-from',
  templateUrl: './master-data-from.component.html',
  styleUrls: ['./master-data-from.component.css']
})
export class MasterDataFromComponent implements OnInit {

   
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  ContentCustomizationData:any=[];
  AllContentUpdatesData: any;
  AllCustomerSupportData: any;
  AllAppManagementDat: any;
  AllHostingChargesData: any;
  AllSoftwareUpdatesData: any;
  AllDevelopmentAndCostData: any;
  AllMarketingSpendData: any;

  public calculationForm!: FormGroup;

  // PeriodicElement = [
  //   {resourceMix: 'Superviser', resourceName:'patner' , ratio:0.5, numberOfMenDays: 12.98 ,menMonth: 0.71, monthlyCtc: 100000, total: 94383},
  //   {resourceMix: '',resourceName: 'AVP/VP', ratio: 0.2, numberOfMenDays: 51.91 ,menMonth: 2.83 ,monthlyCtc:100000, total: 377530},
  //   {resourceMix: '',resourceName: 'Manager/Sr. Mgr', ratio: 0.35, numberOfMenDays: 90.84 ,menMonth: 4.96 ,monthlyCtc:100000, total: 377530},
  //   {resourceMix: '',resourceName: 'Sr. Ass/Ass. Mgr/Ass.', ratio: 0.4, numberOfMenDays: 103.82 ,menMonth: 2.83 ,monthlyCtc:100000, total: 377530},
  // ];

  // ContentCustomizationData[0].manRatio
  // ContentCustomizationData[0].manMonthlyCtc

  constructor(private apiService: ApiService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.initContentCustomForm();

    this.getContentCustomizationData();
    this.getAllContentUpdatesData();
    this.getAllCustomerSupportData();
    this.getAllAppManagementDat();
    this.getAllHostingChargesData();
    this.getAllSoftwareUpdatesData();
    this.getAllMarketingSpendData();
    
  }

  resetFrom(){
    console.log("resetFrom--");
    this.calculationForm.reset();
  }

  initContentCustomForm(){
    this.calculationForm = this.FormBuilder.group({

    contentCustomizations: this.FormBuilder.array([])
    })
  }
  


  getFormGroup(contentCustomizationsSingleData:any){
    return this.FormBuilder.group({
          contentCustomizationId: [contentCustomizationsSingleData.contentCustomizationId],
          manForContentCustomization: [contentCustomizationsSingleData.manForContentCustomization],
          manRatio: [contentCustomizationsSingleData.manRatio],
          noOfManDays: [contentCustomizationsSingleData.noOfManDays],
          manMonth: [contentCustomizationsSingleData.manMonth],
          manMonthlyCtc: [contentCustomizationsSingleData.manMonthlyCtc],
          valueForMan: [contentCustomizationsSingleData.valueForMan]
      });
  }


  

  generateFormData(contentCustomizationsData:any){

    let contentCustomization = this.contentCustomizationArray;

    console.log("jjjjjjjjjj--",contentCustomizationsData);

    for(let i=0;i<contentCustomizationsData.length;i++){
        contentCustomization.push(this.getFormGroup(contentCustomizationsData[i]));
    }
    console.log("yyyyyyyyyyyy--",this.contentCustomizationArray);  
    
  }


  get contentCustomizationArray(){
    return this.calculationForm.get('contentCustomizations') as FormArray;
  }



//get all the tab values............................

  getContentCustomizationData(){
    this.apiService.getContentCustomizationDataApi().subscribe(res=>{
      // this.ContentCustomizationData=res;
      console.log("ContentCustomizationData--",this.ContentCustomizationData);
      this.generateFormData(this.ContentCustomizationData);
    })
  }
  getAllContentUpdatesData(){
    this.apiService.getAllContentUpdatesDataApi().subscribe(res=>{
      this.AllContentUpdatesData = res;
      console.log("AllContentUpdatesData--",this.AllContentUpdatesData);
    })
  }
  getAllCustomerSupportData(){
    this.apiService.getAllCustomerSupportDataApi().subscribe(res=>{
      this.AllCustomerSupportData = res;
      console.log("AllCustomerSupportData--",this.AllCustomerSupportData);
    })
  }
  getAllAppManagementDat(){
    this.apiService.getAllAppManagementDatApi().subscribe(res=>{
      this.AllAppManagementDat = res;
      console.log("AllAppManagementDat--",this.AllAppManagementDat);
    })
  }
  getAllHostingChargesData(){ 
    this.apiService.getAllHostingChargesDatApi().subscribe(res=>{
      this.AllHostingChargesData = res;
      console.log("AllHostingChargesData--",this.AllHostingChargesData );
    })
  }
  getAllSoftwareUpdatesData(){  
    this.apiService.getAllSoftwareUpdatesDataApi().subscribe(res=>{
      this.AllSoftwareUpdatesData = res;
      console.log("AllSoftwareUpdatesData--",this.AllSoftwareUpdatesData);
    })
    this.apiService.getAllDevelopmentAndCostDataApi().subscribe(res=>{
      this.AllDevelopmentAndCostData = res;
      console.log("AllDevelopmentAndCostData--",this.AllDevelopmentAndCostData);
    })
  }
  getAllMarketingSpendData(){
    this.apiService.getAllMarketingSpendDataApi().subscribe(res=>{
      this.AllMarketingSpendData = res;
      console.log("AllMarketingSpendData--",this.AllMarketingSpendData);
    })
  }
  // get all tab values end.......................

  // put all request......................s
  
  contentCustomizationUpdate(calculationForm: any){
    console.log("------contentCustomizationUpdate-------",calculationForm.value.contentCustomizations);
    console.log(this.calculationForm)
  }

}
