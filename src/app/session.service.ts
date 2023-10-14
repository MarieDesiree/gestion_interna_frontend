import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivityService } from './activity.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SessionService {
  backEndURL: string;

  constructor(
    private http: HttpClient,
    private activityService: ActivityService,
  ) {
    this.backEndURL = environment.sayCure;
  }



  decreaseActivity(what: any) {
    return this.http.put(`${this.backEndURL}/activity/one/activity/${what}`, "");
  }



  islogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }


  isloggedc(): boolean {
    if (this.getToken()) {
      if (this.getAdmin() !== 'GIFV' || this.getAdmin() === 'GIFV') {
        return true;

      }
    }
    return false;
  }

  isloggeda(): boolean {
    if (this.getToken() && this.getAdmin() === 'GIFV') {
      return true;
    }
    return false;
  }


  setToken(token: any): Boolean {
    const splo = token.split("°");
    const _id = splo[0];
    const name = splo[1];
    const lastname = splo[2];
    const phone = splo[3];
    const mail = splo[4];
    const admin = splo[5];


    sessionStorage.clear();
    //localStorage.clear();
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('find', _id);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('lastname', lastname);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('mail', mail);
    sessionStorage.setItem('admin', admin);
    return admin == "GIFV" ? true : false
  }



  getToken(): any {
    return sessionStorage.getItem('token');
  }


  getAdmin(): any {
    return sessionStorage.getItem('admin');
  }

  getPerson(): any {
    const person = {
      _id: sessionStorage.getItem('find'),
      name: sessionStorage.getItem('name'),
      lastname: sessionStorage.getItem('lastname'),
      phone: sessionStorage.getItem('phone'),
      mail: sessionStorage.getItem('mail')
    }

    return person
  }



  logOut(): void {
    sessionStorage.clear();
    //localStorage.clear();
  }

}


