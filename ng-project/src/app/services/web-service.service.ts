import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class WebServiceService {

  public apiUrl: String = '';
	private token = '';
	private isUserLogedin = false;
	public headers = new Headers({
		'Content-Type': 'application/json; charset=utf-8'
	});
	constructor(private http: Http, private router: Router) {
		let self = this;
		self.apiUrl = environment.API_URL;
	}

	login(user, callback) {
               
        this.http.post(this.apiUrl + 'auth/login', user, { headers: this.headers }).subscribe(
            data => {
                console.log(data);
                callback(data);
            },
            error => {
                callback(error);
            });
        
    }
  

}
