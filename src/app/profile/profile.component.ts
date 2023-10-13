import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentName:string = '';
  currentName1:string = '';
  currentMoblie:string = '';
  currentEmail:string = ''
  currentPassword:string = ''

  constructor(private authservice:AuthService){}
  ngOnInit() {
    this.authservice.currentUser$.subscribe(user => {
      if (user) {
        this.currentName = user.FirstName; // Assuming FirstName is a property in your user object
        this.currentName1 = user.LastName;
        this.currentMoblie = user.MoblieNumber;
        this.currentEmail = user.Email;
        this.currentPassword = user.Password;


        
      } else {
        this.currentName = ''; // Clear the name if the user is not authenticated
        this.currentName1 = '';
        this.currentMoblie ='';
        this.currentEmail ='';
        this.currentPassword ='';
      
      }
    });
  }

}
