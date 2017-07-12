import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from '../../services/web-service.service';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public formGrp: FormGroup;

	constructor(private router: Router, route: ActivatedRoute, private catService: WebServiceService, public toasterService: ToasterService, private formBuilder: FormBuilder) {
		let self = this;
		self.formGrp = self.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}
	
	login(){
		console.log(this.formGrp)
	}
	ngOnInit() {
	}

}
