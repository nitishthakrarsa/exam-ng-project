import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from '../../services/web-service.service';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from "app/services/validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGrp: FormGroup;

	constructor(private router: Router, private webService: WebServiceService, public toasterService: ToasterService, private formBuilder: FormBuilder) {
		let self = this;
		self.formGrp = self.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', Validators.required],
      firstname:['', [Validators.required, Validators.maxLength(50)]]
		});
	}

  ngOnInit() {
  }

}
