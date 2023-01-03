import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  public loginForm!: FormGroup 
  public br: any;
  hide = true;
  

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private apiService : ApiService ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      userName: [''],
      userPassword : ['']
    })
  
  
  }

  login(){
    if(this.loginForm.valid){
      this.apiService.loginApi(this.loginForm.value).subscribe(result =>{
        if(result){
          console.log("i am in the ts file",result);
          console.log("roleNmae-",result.user.role[0].roleName);
            if(result.user.role[0].roleName == 'ADMIN'){
                alert("if successfull");
                const br = "Bearer "+result.jwtToken;
                console.log(br);
                this.apiService.adminApi({ headers: {"Authorization" : `Bearer ${result.jwtToken}`} }).subscribe(result =>{
                console.log("Admin------>",result);
              },err =>{
                if(err.status === 200){
                  this.loginForm.reset();
                  this.router.navigate(['admin']);
                }else{
                  console.log(err);
                }
              })
            }else if(result.user.role[0].roleName == 'USER'){
              alert("this is user page");
              const br = "Bearer "+result.jwtToken;
              console.log(br);
                this.apiService.userApi({ headers: {"Authorization" : `Bearer ${result.jwtToken}`} }).subscribe(result =>{
                  console.log("oooooooooooooooooooooooooooooooo");
                  console.log("------",result);
              },err =>{
                if(err.status === 200){
                  this.loginForm.reset();
                  this.router.navigate(['user']);
                }else{
                  console.log(err);
                }
              })
              
            }

        }else{
          alert(result);
        }
      },err=>{
        if(err){
          alert("wrong id or Password");
        }
      })
    }
  }
  

  // login(){
  //   this.http.get<any> ("http://172.16.0.196:8080/authenticate")
  //   .subscribe((res: any[])=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email
  //     })
  //     if(user){
  //       alert("login success");
  //       this.loginForm.reset();
  //       this.router.navigate(['user']);
        
  //     }else{
  //       alert("user not found");
  //     }
  //   })
  // }
}
