import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/SharedServices/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-data-from',
  templateUrl: './master-data-from.component.html',
  styleUrls: ['./master-data-from.component.css']
})
export class MasterDataFromComponent implements OnInit {


  ContentCustomizationData:any=[];
  AllContentUpdatesData: any=[];
  AllCustomerSupportData: any=[];
  AllAppManagementDat: any=[];
  AllHostingChargesData: any;
  AllSoftwareUpdatesData: any=[];
  AllDevelopmentAndCostData: any=[];
  AllMarketingSpendData: any=[];

  AdminData : any= [];

  public calculationForm!: FormGroup;
  public contentUpdateForm!: FormGroup;
  public customerSupportForm!: FormGroup;
  public applicationManagement!: FormGroup;

  public hostingChargeForm!: FormGroup;
  public softwerDevelopmentForm!: FormGroup;
  public softwerUpdateForm!: FormGroup;
  public marketingSpendForm!: FormGroup;
  public appManagementForm!: FormGroup;

  temp: any = 0;
  totalContentCost: any;
  totalContentUpdateCost:any;
  costPerLicensePerAnnum: any;




  constructor(private apiService: ApiService, private FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.initContentCustomForm();
    this.contentUpdate();
    this.customerSupport()
    this.HostingCharge();
    this.SoftwerDevelopment_Update();
    this.Softwer_Update();
    this.marketingSpend();
    this.appManagement();

    this.getContentCustomizationData();
    this.getAllContentUpdatesData();
    this.getAllCustomerSupportData();
    this.getAllAppManagementDat();
    this.getAllHostingChargesData();
    this.getAllSoftwareUpdatesData();
    this.getAllMarketingSpendData();
    this.getAdminData();
    
  }

  resetForm(){
    console.log("resetForm--");
    this.ngOnInit();
  }

  sheet9(){
    this.router.navigate(['sheet9']);
  }

  admin(){
    this.router.navigate(['user']);
  }

  //..................content Customization.......................

  initContentCustomForm(){
    this.calculationForm = this.FormBuilder.group({
    productId: "1",
    productName: "Komrisk",
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
    console.log("y--",this.contentCustomizationArray);  
    if(this.contentCustomizationArray){
      for(let i=0; i<this.contentCustomizationArray.length;i++){
        this.temp = this.temp + contentCustomizationsData[i].valueForMan;
      }
      this.totalContentCost = this.temp
      console.log("totalContentCost",this.totalContentCost);
    } this.temp = 0;
  }

  get contentCustomizationArray(){
    return this.calculationForm.get('contentCustomizations') as FormArray;
  }

//.......................ContentCustomization.....End......................
  
//......................ContentUpdate......................................

contentUpdate(){
  this.contentUpdateForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  contentUpdates: this.FormBuilder.array([])
  })
}

getContentUpdateFormGroup(contentUpdateSingleData:any){
  return this.FormBuilder.group({
        contentUpdatesId: [contentUpdateSingleData.contentUpdatesId],
        manForContentUpdates: [contentUpdateSingleData.manForContentUpdates],
        manRatio: [contentUpdateSingleData.manRatio],
        noOfManDays: [contentUpdateSingleData.noOfManDays],
        manMonth: [contentUpdateSingleData.manMonth],
        manMonthlyCtc: [contentUpdateSingleData.manMonthlyCtc],
        valueForMan: [contentUpdateSingleData.valueForMan]
    });
}

generateContentUpdateFormData(contentUpdateData:any){
  let contentCustomization = this.contentUpdateArray;
  console.log("jjjjjjjjjj--",contentUpdateData);
  for(let i=0;i<contentUpdateData.length;i++){
    contentCustomization.push(this.getContentUpdateFormGroup(contentUpdateData[i]));
  }
  console.log("y--",this.contentUpdateArray); 
  if(this.contentUpdateArray){
    for(let i=0; i<this.contentUpdateArray.length;i++){
      this.temp = this.temp + contentUpdateData[i].valueForMan;
    }
    this.totalContentUpdateCost = this.temp;
    console.log("totalContentUpdateCost",this.totalContentUpdateCost);
  }this.temp=0;
}

get contentUpdateArray(){
  return this.contentUpdateForm.get('contentUpdates') as FormArray;
}
//.......................contentUpdate......End.........

//.....................Customer Supprot...................

customerSupport(){
  this.customerSupportForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  customerSupport: this.FormBuilder.array([])
  })
}

getCustomerSupportFormGroup(customerSupportSingleData:any){
  return this.FormBuilder.group({
            customerSupportId: [customerSupportSingleData.customerSupportId],
            manForCustomerSupport: [customerSupportSingleData.manForCustomerSupport],
            manRatio: [customerSupportSingleData.manRatio],
            requiredManDays: [customerSupportSingleData.requiredManDays],
            noOfManDays: [customerSupportSingleData.noOfManDays],
            manMonth: [customerSupportSingleData.manMonth],
            monthlyPayout: [customerSupportSingleData.monthlyPayout],
            monthlyCtc: [customerSupportSingleData.monthlyCtc],
            callsPerUser: [customerSupportSingleData.callsPerUser],
            timePerCall: [customerSupportSingleData.callsPerUser],
            timePerDay: [customerSupportSingleData.callsPerUser],
            valueForMan: [customerSupportSingleData.callsPerUser]
    });
}

generateCustomerSupportFormData(customerSupportData:any){
  let data = this.customerSupportArray;
  console.log("jjjjjjjjjj--",customerSupportData);
  for(let i=0;i<customerSupportData.length;i++){
    data.push(this.getCustomerSupportFormGroup(customerSupportData[i]));
  }
  console.log("",this.customerSupportArray);
  if(this.customerSupportArray){
    for(let i=0; i<this.customerSupportArray.length;i++){
      this.temp = this.temp + customerSupportData[i].valueForMan;
    }
    this.costPerLicensePerAnnum = (this.temp*12);
    console.log("totalContentCustomerSupportUpdateCost",this.costPerLicensePerAnnum);
  }this.temp=0;
}

get customerSupportArray(){
  return this.customerSupportForm.get('customerSupport') as FormArray;
}
//.................Customer Support End...............................

//.................Hosting Charge Start...............................

HostingCharge(){
  this.hostingChargeForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  hostingCharges: this.FormBuilder.array([])
  })
}

getHostingChargeFormGroup(hostingChargeSingleData:any){
  return this.FormBuilder.group({
    hostingChargesId: [hostingChargeSingleData.hostingChargesId],
    costPerServer: [hostingChargeSingleData.costPerServer],
    licensePerServer: [hostingChargeSingleData.licensePerServer],
    occupancyPercent: [hostingChargeSingleData.occupancyPercent],
    costPerLicense: [hostingChargeSingleData.costPerLicense]
    });
}

generateHostingChargeFormData(hostingChargeData:any){
  let formDataContainer = this.hostingChargeArray;
  console.log("jjjjjjjjjj--",hostingChargeData);
  for(let i=0;i<hostingChargeData.length;i++){
    formDataContainer.push(this.getHostingChargeFormGroup(hostingChargeData[i]));
  }
  console.log("hosting chargers-",this.hostingChargeArray);  
}

get hostingChargeArray(){
  return this.hostingChargeForm.get('hostingCharges') as FormArray;
}
//.................. HostingCharges ... End.................

//...................App Mamegment......Start...............

appManagement(){
      this.appManagementForm = this.FormBuilder.group({
      productId: "1",
      productName: "Komrisk",
      applicationManagements: this.FormBuilder.array([])
    })
}

getApplicationManagementFormGroup(singleFormData:any){
  return this.FormBuilder.group({
    appManagementId: [singleFormData.appManagementId],
    noOfServers: [singleFormData.noOfServers],
    resourceCostCtc: [singleFormData.resourceCostCtc],
    noOfLicensePerServer: [singleFormData.noOfLicensePerServer],
    costPerLicense: [singleFormData.costPerLicense]
    });
}

generateApplicationManagementFormData(appManagementData:any){
  let formDataContainer = this.appManagementArray;
  console.log("jjjjjjjjjj--",appManagementData);
  for(let i=0;i<appManagementData.length;i++){
    formDataContainer.push(this.getApplicationManagementFormGroup(appManagementData[i]));
  }
  console.log("app management-",this.appManagementArray);  
}

get appManagementArray(){
  return this.appManagementForm.get('applicationManagements') as FormArray;
}




//...................App Mamegment......End...............



//...................<!--Software Development & Update start-->.............

SoftwerDevelopment_Update(){
  this.softwerDevelopmentForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  softwareDevelopmentAndCosts: this.FormBuilder.array([])
  })
}

softwerDevelopmentFormGroup(softwerDevelopmentSingleData:any){
  return this.FormBuilder.group({
    developmentAndCostId: [softwerDevelopmentSingleData.developmentAndCostId],
    paymentToIQSS: [softwerDevelopmentSingleData.paymentToIQSS],
    contentCostCapitalised: [softwerDevelopmentSingleData.contentCostCapitalised]
    });
}

generateSoftwetwerDevelopmentFormData(softwerDevData:any){
  let formDataContainer = this.softwerDevelopmentArray;
  console.log("jjjjjjjjjj--",softwerDevData);
  for(let i=0;i<softwerDevData.length;i++){
    formDataContainer.push(this.softwerDevelopmentFormGroup(softwerDevData[i]));
  }
  console.log("SwfDev-",this.softwerDevelopmentArray);  
}

get softwerDevelopmentArray(){
  return this.softwerDevelopmentForm.get('softwareDevelopmentAndCosts') as FormArray;
}

//......................

Softwer_Update(){
  this.softwerUpdateForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  softwareUpdates: this.FormBuilder.array([])
  })
}

softwerUpdateFormGroup(softwerUpdateSingleData:any){
  return this.FormBuilder.group({
    softwareUpdatesId: [softwerUpdateSingleData.softwareUpdatesId],
    softwareSpend: [softwerUpdateSingleData.softwareSpend],
    newClientsAdded: [softwerUpdateSingleData.newClientsAdded],
    averageLicensePerClient: [softwerUpdateSingleData.averageLicensePerClient],
    probabilityPercent: [softwerUpdateSingleData.probabilityPercent],
    costPerClient: [softwerUpdateSingleData.costPerClient]
    });
}

generateSoftwetwerUpdateFormData(softwerDevData:any){
  let formDataContainer = this.softwerUpdateArray;
  console.log("jjjjjjjjjj--",softwerDevData);
  for(let i=0;i<softwerDevData.length;i++){
    formDataContainer.push(this.softwerUpdateFormGroup(softwerDevData[i]));
  }
  console.log("SwfUpdate-",this.softwerUpdateArray);  
}

get softwerUpdateArray(){
  return this.softwerUpdateForm.get('softwareUpdates') as FormArray;
}
//................Softwer update and Development End..................

//..................Komrisk Marketing Spend Start.....................

marketingSpend(){
  this.marketingSpendForm = this.FormBuilder.group({
  productId: "1",
  productName: "Komrisk",
  marketingSpends: this.FormBuilder.array([])
  })
}

marketingSpendFormGroup(marketingSpendSingleData:any){
  return this.FormBuilder.group({
    marketingSpendId: [marketingSpendSingleData.marketingSpendId],
    marketingSpendPerYear: [marketingSpendSingleData.marketingSpendPerYear],
    komriskClients: [marketingSpendSingleData.komriskClients]
    });
}

generateMarketingSpendFormData(marketingSpendData:any){
  let formDataContainer = this.marketingSpendFormArray;
  console.log("jjjjjjjjjj--",marketingSpendData);
  for(let i=0;i<marketingSpendData.length;i++){
    formDataContainer.push(this.marketingSpendFormGroup(marketingSpendData[i]));
  }
  console.log("marketingSpendFormArray-",this.marketingSpendFormArray);  
}

get marketingSpendFormArray(){
  return this.marketingSpendForm.get('marketingSpends') as FormArray;
}

//...................markating end...............










//get all the tab values............................

  getContentCustomizationData(){
    this.apiService.getContentCustomizationDataApi().subscribe(res=>{
      this.ContentCustomizationData=res;
      console.log("ContentCustomizationData--",this.ContentCustomizationData);
      this.generateFormData(this.ContentCustomizationData);
    })
  }
  getAllContentUpdatesData(){
    this.apiService.getAllContentUpdatesDataApi().subscribe(res=>{
      this.AllContentUpdatesData = res;
      console.log("AllContentUpdatesData--",this.AllContentUpdatesData);
      this.generateContentUpdateFormData(this.AllContentUpdatesData);
    })
  }
  getAllCustomerSupportData(){
    this.apiService.getAllCustomerSupportDataApi().subscribe(res=>{
      this.AllCustomerSupportData = res;
      console.log("AllCustomerSupportData--",this.AllCustomerSupportData);
      this.generateCustomerSupportFormData(this.AllCustomerSupportData);
    })
  }
  getAllAppManagementDat(){
    this.apiService.getAllAppManagementDatApi().subscribe(res=>{
      this.AllAppManagementDat = res;
      console.log("AllAppManagementDat--",this.AllAppManagementDat);
      this.generateApplicationManagementFormData(this.AllAppManagementDat);
    })
  }
  getAllHostingChargesData(){ 
    this.apiService.getAllHostingChargesDatApi().subscribe(res=>{
      this.AllHostingChargesData = res;
      console.log("AllHostingChargesData--",this.AllHostingChargesData );
      this.generateHostingChargeFormData(this.AllHostingChargesData);
    })
  }
  getAllSoftwareUpdatesData(){  
    this.apiService.getAllDevelopmentAndCostDataApi().subscribe(res=>{
      this.AllDevelopmentAndCostData = res;
      console.log("AllDevelopmentAndCostData--",this.AllDevelopmentAndCostData);
      this.generateSoftwetwerDevelopmentFormData(this.AllDevelopmentAndCostData);
    })
    this.apiService.getAllSoftwareUpdatesDataApi().subscribe(res=>{
      this.AllSoftwareUpdatesData = res;
      console.log("AllSoftwareUpdatesData--",this.AllSoftwareUpdatesData);
      this.generateSoftwetwerUpdateFormData(this.AllSoftwareUpdatesData);
    })
    
  }
  // getAllDevelopmentAndCostData(){
  //   this.apiService.getAllDevelopmentAndCostDataApi().subscribe(res=>{
  //     this.AllDevelopmentAndCostData = res;
  //     console.log("AllDevelopmentAndCostData--",this.AllDevelopmentAndCostData);
  //     this.generateSoftwetwerDevelopmentFormData(this.AllDevelopmentAndCostData);
  //   })
  // }
  getAllMarketingSpendData(){
    this.apiService.getAllMarketingSpendDataApi().subscribe(res=>{
      this.AllMarketingSpendData = res;
      console.log("AllMarketingSpendData--",this.AllMarketingSpendData);
      this.generateMarketingSpendFormData(this.AllMarketingSpendData);
    })
  }

  getAdminData(){
    this.apiService.getAdminData().subscribe(res=>{
      this.AdminData = res;
      console.log('admin data-',this.AdminData);
    })
  }
  // get all tab values end.......................





  // put all request......................start.......
  
  contentCustomizationUpdate(calculationForm: any){
    console.log("calculationForm--",calculationForm.value);
    this.apiService.updateContentCustomizationDataApi(calculationForm.value).subscribe(res=>{
        if(res){
          this.getContentCustomizationData();
          this.initContentCustomForm();
        }
      })

    }

    contentUpdateUpdate(contentUpdateForm: any){
      console.log("calculationForm--",contentUpdateForm.value);
      this.apiService.updateUpdateDataApi(contentUpdateForm.value).subscribe(res=>{
          if(res){
            this.getAllContentUpdatesData();
            this.contentUpdate();
          }
        })
  
      }

      customerSupportUpdate(customerSupportFormValue: any){
        console.log("calculationForm--",customerSupportFormValue.value);
        this.apiService.customerSupportDataApi(customerSupportFormValue.value).subscribe(res=>{
            if(res){
              this.getAllCustomerSupportData();
              this.customerSupport();
            }
          })
    
        }

        hostingChargeUpdate(hostingChargeFormValue: any){
          console.log("calculationForm--",hostingChargeFormValue.value);
          this.apiService.hostingChargeDataApi(hostingChargeFormValue.value).subscribe(res=>{
              if(res){
                this.getAllHostingChargesData();
                this.HostingCharge();
              }
              
            })
      
          }

          softwerDevUpdate(softwerDevFormValue: any){
            console.log("calculationForm--",softwerDevFormValue.value);
            this.apiService.softwerDevDataApi(softwerDevFormValue.value).subscribe(res=>{
                if(res){
                  this.getAllSoftwareUpdatesData();
                  this.SoftwerDevelopment_Update();
                  this.Softwer_Update();
                }
                
              })
        
          }
            softwerUpdate(softwerUpdateFormValue: any){
              console.log("calculationForm--",softwerUpdateFormValue.value);
              this.apiService.softwerUpdateDataApi(softwerUpdateFormValue.value).subscribe(res=>{
                  if(res){
                  this.getAllSoftwareUpdatesData();
                  this.SoftwerDevelopment_Update();
                  this.Softwer_Update();
                  }
                  
                })
          
            }

            marketingSpendUpdate(marketingSpendFormValue: any){
              console.log("calculationForm--",marketingSpendFormValue.value);
              this.apiService.markatingUpdateDataApi(marketingSpendFormValue.value).subscribe(res=>{
                  if(res){
                    this.getAllMarketingSpendData();
                    this.marketingSpend();
                  }
                  
                })
            }
            updateAppManagement(appMangementData: any){
              console.log("appManage--",appMangementData.value);
              this.apiService.appManagmentUpdateDataApi(appMangementData.value).subscribe(res=>{
                  if(res){
                    // this.getAllAppManagementDat();
                    // this.appManagement();
                  }
                  
                })
          
            }

}
