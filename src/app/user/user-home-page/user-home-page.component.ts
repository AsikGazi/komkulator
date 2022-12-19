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
  // selectedModules =({
  //   le: [],
  //   ehs: [],
  //   industrySpecific: [],
  //   fiscal: [],
  //   corporate: []
  // })
  


  br: any;
  entities : any;
  typeOfIndust : any;
  legalStracture : any;
  listingStatus : any;
  states : any;
  // private static productId ='1';
  // private static productName ='1';

  leValue = false;
  ehsVlaue = false;
  industrySpecificValue = false;
  fiscalValue = false;
  corporateValue = false;
 
  calculationForm:any = FormGroup;

 

  constructor(private apiService : ApiService, public dialog: MatDialog, private FormBuilder: FormBuilder ) { }
   
  ngOnInit(): void {
   this.intCalculationForm();
  //  this.getEntitieList();
  //  this.getIndustryTypeList();
  //  this.getLegalStructureList();
  //  this.getListingStatusList();
  //  this.getStatusList();
  }


   

  intCalculationForm(){
    this.calculationForm = this.FormBuilder.group({
      nameOfOrganisation: [''],
      productId: ['1'],
      productName : ['Komrisk'],
      noOfEntities: [''],
      operatingIndustries: [''],
      typeOfIndustry: [''],
      organisationLegalStructure: [''],
      organisationListingStatus: [''],
      le: [this.leValue],
      ehs: [],
      industrySpecific: [],
      fiscal: [],
      corporate: [],
      statesRequireComplianceModules: [''],
      noOfLicenseRequired: [''],
      contractTerm: [''],
    })
  }
onCalculationFormSubmit(){
  console.log("----",this.selectedModules);
  // if(this.selectedToppings.find('le')){
  //   alert("hii");
  // }
}







  //............................


  getEntitieList(){
    console.log("entityList---",this.entities);
    this.apiService.getEntitieListApi().subscribe(res=>{
      this.entities = res;
      console.log("under the api call of getEntiteList-",this.entities);
    })
  }

  getIndustryTypeList(){
    this.apiService.getIndustryTypeListApi().subscribe(res=>{
      this.typeOfIndust = res;
      console.log("under the api call of getIndustryTypeList-",this.typeOfIndust);
    })
  }

  getLegalStructureList(){
    this.apiService.getLegalStructureListApi().subscribe(res=>{
      this.legalStracture = res;
      console.log("under the api call of getIndustryTypeList-",this.legalStracture);
    })
  }

  getListingStatusList(){
    this.apiService.getListingStatusListApi().subscribe(res=>{
      this.listingStatus = res;
      console.log("under the api call of getIndustryTypeList-",this.listingStatus);
    })
  }

  getStatusList(){
    this.apiService.getStatusListApi().subscribe(res=>{
      this.states = res;
      console.log("under the api call of getIndustryTypeList-",this.states);
    })
  }

  openDialog() {
    this.dialog.open(PopUpComponent);
  }

}
