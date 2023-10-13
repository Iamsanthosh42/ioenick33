import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
public signupForm !: FormGroup;
  
  constructor(private formbuilder:  FormBuilder,private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      MoblieNumber:['',[Validators.required,Validators.minLength(10)]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required,Validators.minLength(8)]],



    })
     }
     signup(){
  this.http.post<any>("http://localhost:3000/signupusers",this.signupForm.value)
.subscribe(res =>{
  alert("signup successful");
 this.signupForm.reset();
 this.router.navigate(['/login']);
},err=>{
  alert("something  went wrong")
})
     }

  
}
