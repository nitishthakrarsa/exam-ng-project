import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from '../../services/web-service.service';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from "app/services/validation.service";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public formGrp: FormGroup;

	constructor(private router: Router, private webService: WebServiceService, public toasterService: ToasterService, private formBuilder: FormBuilder) {
		let self = this;
		self.formGrp = self.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', Validators.required],
		});
	}
	
	login(){
		let self = this;

		if(self.formGrp.valid){
			self.webService.login(self.formGrp.value, function (data) {
				var res = JSON.parse(data._body);
				if (data.status == "200") {				
					localStorage.setItem("accessToken", res.token);
					self.toasterService.pop('success', 'Login', res.msg);
					document.body.className="no-backgorund";
						self.router.navigate(['/']);
	
				} else {
	
				}
	
			});
		}
		
	}
	ngOnInit() {
	}

}
