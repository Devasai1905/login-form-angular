import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor( private formBuilder : FormBuilder, private http : HttpClient,private router: Router){ }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    
  }
  login(){
    this.http.get<any>("http://localhost:3000/sinupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login is Success");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something is went worng")
    })

  }

}

