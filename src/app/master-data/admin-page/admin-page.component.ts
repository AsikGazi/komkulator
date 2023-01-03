import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public adminFormGroup!:FormGroup;

  adminData: any

  constructor(public FormBuilder: FormBuilder, private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.initAdminFrom();
    this.getAdminData();
  }

sheet9(){
  this.router.navigate(['sheet9']);
}

  //.... getAdminData.............
  getAdminData(){
    this.apiService.getAdminData().subscribe(res=>{
      console.log("admin data-",res);
      this.adminData = res;
      this.generateFormData(this.adminData);
    })
  }

//send from....

adminDataUpdate(adminDataForm: any){
  console.log("calculationForm--",adminDataForm.value);
  this.apiService.updateAdminData(adminDataForm.value).subscribe(res=>{
      if(res){
        this.getAdminData();
        this.initAdminFrom();
      }
    })

  }


//from Build.........
  initAdminFrom(){
    this.adminFormGroup = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
    particularsDetails: this.FormBuilder.array([])
    })
  }
  
  getFormGroup(contentCustomizationsSingleData:any){
    return this.FormBuilder.group({
          particularsId: [contentCustomizationsSingleData.particularsId],
          deploymentModel: [contentCustomizationsSingleData.deploymentModel],
          manDays: [contentCustomizationsSingleData.manDays],
          manDaysEffort: [contentCustomizationsSingleData.manDaysEffort],
          itEffort: [contentCustomizationsSingleData.itEffort],
          daysAvailable: [contentCustomizationsSingleData.daysAvailable],
          licenseSold: [contentCustomizationsSingleData.licenseSold],
          contentCreated: [contentCustomizationsSingleData.contentCreated],
          exclusiveOrGeneric: [contentCustomizationsSingleData.exclusiveOrGeneric],
          productivityPercent: [contentCustomizationsSingleData.productivityPercent],
          occupancyPercent: [contentCustomizationsSingleData.occupancyPercent],
          probabilityPercent: [contentCustomizationsSingleData.probabilityPercent],
          newClientsProposed: [contentCustomizationsSingleData.newClientsProposed],
          licenseProposed: [contentCustomizationsSingleData.licenseProposed],
          profitabilityBenchmark: [contentCustomizationsSingleData.profitabilityBenchmark],
          licenceFee:[],

      });
  }


  generateFormData(formDta:any){
    let dataContener = this.adminDtaArray;
    console.log("jjjjjjjjjj--",formDta);
    for(let i=0;i<formDta.length;i++){
      dataContener.push(this.getFormGroup(formDta[i]));
    }
    console.log("y--",this.adminDtaArray);  
  }

  get adminDtaArray(){
    return this.adminFormGroup.get('particularsDetails') as FormArray;
  }

  resetFrom(){
    console.log("resetFrom--");
    this.ngOnInit();
  }

}


//.....................................Sheet9-Start................................//