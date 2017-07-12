import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import { LoginComponent } from "app/components/login/login.component";
import { RegisterComponent } from "app/components/register/register.component";

const APP_ROUTES: Routes = [
	{ path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }