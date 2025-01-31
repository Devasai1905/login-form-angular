import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
    
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/sinupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup SuccessFull")
      this.signupForm.reset();
      this.router.navigate(['login']);
    
    },err=>{
      alert("Something is Went Wrong")
    } )

  }

}
