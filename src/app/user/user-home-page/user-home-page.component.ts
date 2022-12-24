import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FormBuilder,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit{
  toppings = new FormControl();

  moduleList = [ "le","ehs","industrySpecific","fiscal","corporate",];
  selectedModules : any;
  // selectedModules = this.FormBuilder.group({
  //   le: [''],
  //   ehs: [''],
  //   industrySpecific: [''],
  //   fiscal: [''],
  //   corporate: ['']
  // })
  


  br: any;
  entities : any;
  typeOfIndust : any;
  legalStracture : any;
  listingStatus : any;
  states : any;
  // private static productId ='1';
  // private static productName ='1';

 
  calculationForm:any = FormGroup;
  calcultedOneTimeFee: any;
  monthlySubscription: any;

 

  constructor(private apiService : ApiService, public dialog: MatDialog, private FormBuilder: FormBuilder ) { }
   
  ngOnInit(): void {
   this.intCalculationForm();
   this.getEntitieList();
   this.getIndustryTypeList();
   this.getLegalStructureList();
   this.getListingStatusList();
   this.getStatusList();
  }


   

  intCalculationForm(){
    this.calculationForm = this.FormBuilder.group({
      nameOfOrganisation:[''],
      productId: ['1'],
      productName : ['Komrisk'],
      noOfEntities: [''],
      operatingIndustries: [''],
      typeOfIndustry: [''],
      organisationLegalStructure: [''],
      organisationListingStatus: [''],
      le: [false],
      ehs: [false],
      industrySpecific: [false],
      fiscal: [false],
      corporate: [false],
      statesRequireComplianceModules: [''],
      noOfLicenseRequired: [''],
      contractTerm: [''],
    })
  }
onCalculationFormSubmit(){
  console.log("----",this.calculationForm.value.le);
  if(this.selectedModules.includes('le')){
    this.calculationForm.value.le=true;
  }else{this.calculationForm.value.le=false;}
  if(this.selectedModules.includes('ehs')){
    this.calculationForm.value.ehs=true;
  }else{this.calculationForm.value.ehs=false;}
  if(this.selectedModules.includes('industrySpecific')){
    this.calculationForm.value.industrySpecific=true;
  }else{this.calculationForm.value.industrySpecific=false;}
  if(this.selectedModules.includes('fiscal')){
    this.calculationForm.value.fiscal=true;
  }else{this.calculationForm.value.fiscal=false;}
  if(this.selectedModules.includes('corporate')){
    this.calculationForm.value.corporate=true;
  }else{this.calculationForm.value.corporate=false;}

 console.log("Final form-",this.calculationForm.value);
  this.calculationFunction(this.calculationForm.value);
  //document.getElementById('calDiv').style.display = "block";
}

calculationFunction(formValue: any){
  console.log("this is calculationFunction--")
  if(formValue)
  this.apiService.calculationApi(formValue).subscribe(result =>{
    console.log("Result--Final--",result);
    this.calcultedOneTimeFee = result.oneTimeFee;
    this.monthlySubscription = result.monthlySubscription;
    console.log("calcultedOneTimeFee-",this.calcultedOneTimeFee);
    console.log("monthlySubscription-",this.monthlySubscription);
  })
}






  //............................


  getEntitieList(){
    console.log("entityList---",this.entities);
    this.apiService.getEntitieListApi().subscribe(res=>{
      this.entities = res;
      console.log("under the api call of getEntitieListApi-",this.entities);
    })
  }

  getIndustryTypeList(){
    this.apiService.getIndustryTypeListApi().subscribe(res=>{
      this.typeOfIndust = res;
      console.log("under the api call of getIndustryTypeListApi-",this.typeOfIndust);
    })
  }

  getLegalStructureList(){
    this.apiService.getLegalStructureListApi().subscribe(res=>{
      this.legalStracture = res;
      console.log("under the api call of getLegalStructureListApi-",this.legalStracture);
    })
  }

  getListingStatusList(){
    this.apiService.getListingStatusListApi().subscribe(res=>{
      this.listingStatus = res;
      console.log("under the api call of getListingStatusListApi-",this.listingStatus);
    })
  }

  getStatusList(){
    this.apiService.getStatusListApi().subscribe(res=>{
      this.states = res;
      console.log("under the api call of getStatusListApi-",this.states);
    })
  }

  openDialog() {
    this.dialog.open(PopUpComponent);
  }

}
