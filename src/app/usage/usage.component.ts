import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { ConverService } from '../conver.service';
import { PassWord, Person, PersonUpte } from '../model/auth.dto';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private conService: ConverService,
    private authService: AuthService,
    private router: Router) { }

  classyMenu = 'dggg';





  authented!: PersonUpte;
  authpass!: PassWord;

  name!: string;
  lastname!: string;
  phone!: string;
  mail!: string;
  _id!: string;

  person = new PersonUpte(this._id, this.name, this.lastname, this.phone, this.mail);

  password!: string;
  confirme!: string;
  oldpassword!: string;
  notmatch: boolean = false;
  wrongpass: boolean = false;
  updateod: boolean = false;


  passward = new PassWord(this._id, this.password, this.oldpassword);
  mynam!: string;


  ngOnInit(): void {
    this.person = this.sessionService.getPerson();
    this.mynam = this.conService.thisiswhat(`${this.person.name}â${this.person.lastname}`)
    this._id = this.conService.thisiswhat(`${this.person._id}`)
    this.name = this.conService.thisiswhat(`${this.person.name}`)
    this.lastname = this.conService.thisiswhat(`${this.person.lastname}`)
    this.phone = this.conService.thisiswhat(`${this.person.phone}`)
    this.mail = this.conService.thisiswhat(`${this.person.mail}`)
  }

  onOption(chan: any): void {
    this.classyMenu = chan === 'menu-on' ? "dggg" : 'menu-on';
  }



  onUpdate(): void {
    this.authented = new PersonUpte(this._id, this.name, this.lastname, this.phone, this.mail);

    this.authService.PersonUpte(this._id, this.authented).subscribe(data => {
      console.log(data);
      if (data == "ok") {
        console.log("updated")
      }

    })
  }


  onPassword(): void {
    this.authpass = new PassWord(this._id, this.password, this.oldpassword);
    if (this.password === this.confirme) {
      this.authService.PassUpte(this._id, this.authpass).subscribe(pass => {
        if (pass.wrong == "ok") {
          this.updateod = true;
          this.wrongpass = false;
          this.notmatch = false;
          this.password = "";
          this.confirme = "";
          this.oldpassword = "";
          setTimeout(() => {
            this.updateod = false;
          }, 7000);

        } else if(pass.wrong == "wrong"){
          this.wrongpass = true;
          this.updateod = false;
          this.notmatch = false;
          setTimeout(() => {
            this.wrongpass = false;
          }, 7000);
        }

      })
    } else {
      this.notmatch = true;
      this.updateod = false;
      this.wrongpass = false;
      this.password = "";
      this.confirme = "";
      setTimeout(() => {
        this.notmatch = false;

      }, 7000);
    }

  }

  logOut(): void {
    this.sessionService.logOut();
    window.location.reload()
  }
}
