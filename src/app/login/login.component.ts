import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm !: FormGroup;

 constructor(private formbuilder:  FormBuilder,private http: HttpClient, private router: Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  
login(){
  const email = this.loginForm.value.Email;
    const password = this.loginForm.value.Password;

    this.authService.login(email, password).subscribe((loggedIn) => {
      if (loggedIn) {
        alert('Login successful');
        this.loginForm.reset();
        this.router.navigate(['/Home']);
      } else {
        alert('User not found');
      }
    }, (err) => {
      alert('Something went wrong');
    });
  }
//   this.http.get<any>("http://localhost:3000/signupusers")
//   .subscribe(res=>{
//     const user =   res.find((a:any)=>{
//       return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
           
//     });
   
//     if(user?.Email === this.loginForm.value.Email){
//     alert("login sucess");
//      this.loginForm.reset();
//      this.router.navigate(['/Home']);
     
//     }else{
//       alert("user Not Found")
//     }
  
//   },err=>{
//     alert("something Went wrong")
//   })
// }
}
