import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


/* 
'Authorization' : `Bearer ${this.sessionService.getToken()}`
const headers = { 'Authorization': 'Bearer my-token' }
        this.http.get<any>('https://testapi.jasonwatmore.com/products/1', { headers })
        */


const dae: any = {
  "1": "lundi",
  "2": "mardi",
  "3": "mercredi",
  "4": "jeudi",
  "5": "vendredi",
  "6": "samedi",
  "0": "dimanche"
}


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  backEndURL: string;
  char: any = {};
  da = new Date().getDay()

  constructor(private http: HttpClient) {
    this.backEndURL = environment.sayCure;
  }


  isSession(): boolean {
    if (this.getSession()) {
      return true;
    }
    return false;
  }

  isVisited(): boolean {
    if (this.getVisited()) {
      return true;
    }
    return false;
  }

  getVisited(): any {
    return localStorage.getItem('visited');
  }

  getSession(): any {
    return sessionStorage.getItem('session');
  }

  increaseActivity(): Observable<any> {
    if (this.isVisited() && !this.isSession()) {
      const da = new Date().getDay();
      const doa = dae[`${da}`];
      const waa = this.http.put(`${this.backEndURL}/activity/activityrep/${doa}`, "");
      sessionStorage.setItem('session', "session");
      return waa
    }
    else if (!this.isVisited() && !this.isSession()) {
      const da = new Date().getDay();
      const doa = dae[`${da}`];
      const yool = this.http.put(`${this.backEndURL}/activity/activity/${doa}`, "");

      localStorage.setItem('visited', "visited");
      sessionStorage.setItem('session', "session");
      return yool
    } else {
      return this.http.put("https://Allah.is.one", "");

    }
  }


  generaTor(): Observable<any> {
    return this.http.post(`${this.backEndURL}/activity`, "");
  }


  incCom(): Observable<any> {
    const doc = dae[`${this.da}`];
    return this.http.put(`${this.backEndURL}/activity/tree/five/one/compte/${doc}`, "");
  }

  dgeaa() {
    return this.http.post(`${this.backEndURL}/activity/`, "");
  }


  getChar(): Observable<any> {
    return this.http.get(`${this.backEndURL}/activity`);
  }

  getCharr(): Observable<any> {
    return this.http.get(`${this.backEndURL}/activity/activityrep`);
  }

  getCharc(): Observable<any> {
    return this.http.get(`${this.backEndURL}/activity/compte`);
  }

  getPersons(): Observable<any> {
    return this.http.get(`${this.backEndURL}/people/persons`);
  }

}