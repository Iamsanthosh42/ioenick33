import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
currentvalue: string = '';
 currentTime:string = '';
 currentName:string = '';

constructor(private authService: AuthService){}
ngOnInit(): void {
  this.updateGreeting();
    setInterval(()=> this.updateGreeting(),60000);

    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.currentName = user.FirstName +  user.LastName; // Assuming FirstName is a property in your user object
      } else {
        this.currentName = ''; // Clear the name if the user is not authenticated
      }
    });
}
private updateGreeting(){
  const currentTime = new Date() ;
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();


  let greeting = '';

  if(hours >= 5 && hours < 12){
    greeting = 'Good Morning';
  }
  else  if(hours >=12 && hours < 18){
    greeting = 'Good Afternoon'
  }
  else{
    greeting = 'Good Evening'
  }
  this.currentvalue = `${greeting}`;
}
 
}


