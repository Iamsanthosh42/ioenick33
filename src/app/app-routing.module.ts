import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AirconditionerComponent } from './Electronics components/airconditioner/airconditioner.component';
import { BlueetoothComponent } from './Electronics components/blueetooth/blueetooth.component';
import { CamerasComponent } from './Electronics components/cameras/cameras.component';
import { CoolersComponent } from './Electronics components/coolers/coolers.component';
import { FansComponent } from './Electronics components/fans/fans.component';
import { LaptopsComponent } from './Electronics components/laptops/laptops.component';
import { MicroovensComponent } from './Electronics components/microovens/microovens.component';
import { RefrigeratorsComponent } from './Electronics components/refrigerators/refrigerators.component';
import { TabletsComponent } from './Electronics components/tablets/tablets.component';
import { WashingmachinesComponent } from './Electronics components/washingmachines/washingmachines.component';
import { TelevisionComponent } from './Electronics components/television/television.component';
import { MobliesComponent } from './Electronics components/moblies/moblies.component';
import { GlossyzComponent } from './glossyz/glossyz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicalComponent } from './medical/medical.component';
import { ProfileComponent } from './profile/profile.component';
import { safeGuard } from './guards/safe.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Home',component:HomeComponent,canActivate:[safeGuard],children:[
  {path: 'acc', component:AirconditionerComponent},
  {path:'bc',component:BlueetoothComponent},
  {path:'camc',component:CamerasComponent},
  {path:'cc',component:CoolersComponent},
  {path:'fc',component:FansComponent},
  {path:'lc',component:LaptopsComponent},
  {path:'moc',component:MobliesComponent},
  {path:'mc',component:MicroovensComponent},
  {path:'rc',component:RefrigeratorsComponent},
  {path:'tc',component:TabletsComponent},
  {path:'tec',component:TelevisionComponent},
  {path:'wmc',component:WashingmachinesComponent},
  {path:'Glossyz',component:GlossyzComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Medicines',component:MedicalComponent},
  {path:'profile',component:ProfileComponent},
 
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
