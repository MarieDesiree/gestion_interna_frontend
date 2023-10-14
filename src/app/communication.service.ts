import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Register } from './model/auth.dto';



@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  backEndURL: string;

  constructor(private http: HttpClient) {
    this.backEndURL = environment.sayCure;
  }



  ///////////////////////// user ///////////////////

  getAlluser(): Observable<any> {
    return this.http.post(`${this.backEndURL}/auth`, {});
  }

  updateUse(intr: Register) {
    return this.http.put(`${this.backEndURL}/auth/${intr._id}`, intr);
  }


  deleteUse(id: string) {
    return this.http.delete(`${this.backEndURL}/auth/${id}`);
  }
}
