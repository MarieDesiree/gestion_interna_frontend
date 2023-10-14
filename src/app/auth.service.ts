import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, PassWord, PersonUpte, Register } from './model/auth.dto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  backEndURL: string;



  constructor(private http: HttpClient) { 
    this.backEndURL = environment.sayCure;
  }
 
  register(loga: Register): Observable<any> {
    return this.http.post<any>(`${this.backEndURL}/people`, loga)
  }


  PersonUpte(id: any, pserson: PersonUpte): Observable<any> {
    return this.http.put<any>(`${this.backEndURL}/people/personupdate/${id}`, pserson)
  }


  PassUpte(id: any, passwor: PassWord): Observable<any> {
    return this.http.put<any>(`${this.backEndURL}/people/passwordupdate/${id}`, passwor)
  }

  login(logz: Login): Observable<any> {
   const person = this.http.post<any>(`${this.backEndURL}/people/login`, logz);
   return person;
  }


  updateData(data: Register) {
    return this.http.patch<any>(`${this.backEndURL}/people`, data);
  }
}
