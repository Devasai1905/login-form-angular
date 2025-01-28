import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule}from '@angular/forms'
import { HttpClient, HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServerModule } from '@angular/platform-server';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   ServerModule,
   MatSnackBarModule
  
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
