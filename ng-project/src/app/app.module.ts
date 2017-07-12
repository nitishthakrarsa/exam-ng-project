import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AppRoutingModule } from "./routers/route";
import { WebServiceService } from "app/services/web-service.service";
import { ValidationService } from "app/services/validation.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToasterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WebServiceService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
