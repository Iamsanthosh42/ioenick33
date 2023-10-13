import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AirconditionerComponent } from './Electronics components/airconditioner/airconditioner.component';
import { BlueetoothComponent } from './Electronics components/blueetooth/blueetooth.component';
import { CoolersComponent } from './Electronics components/coolers/coolers.component';
import { CamerasComponent } from './Electronics components/cameras/cameras.component';
import { FansComponent } from './Electronics components/fans/fans.component';
import { LaptopsComponent } from './Electronics components/laptops/laptops.component';
import { MicroovensComponent } from './Electronics components/microovens/microovens.component';
import { RefrigeratorsComponent } from './Electronics components/refrigerators/refrigerators.component';
import { TabletsComponent } from './Electronics components/tablets/tablets.component';
import { MobliesComponent } from './Electronics components/moblies/moblies.component';
import { WashingmachinesComponent } from './Electronics components/washingmachines/washingmachines.component';
import { TelevisionComponent } from './Electronics components/television/television.component';
import { GlossyzComponent } from './glossyz/glossyz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MedicalComponent } from './medical/medical.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AirconditionerComponent,
    BlueetoothComponent,
    CamerasComponent,
    CoolersComponent,
    FansComponent,
    LaptopsComponent,
    MicroovensComponent,
    RefrigeratorsComponent,
    TabletsComponent,
    WashingmachinesComponent,
    MobliesComponent,
    TelevisionComponent,
    GlossyzComponent,
    DashboardComponent,
    MedicalComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
