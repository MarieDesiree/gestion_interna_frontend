import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../activity.service';
import { ConverService } from '../conver.service';
import { Person } from '../model/auth.dto';
import { SessionService } from '../session.service';
//"start": "ng serve --host 192.168.1.147",


@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private connecto: ActivityService,
    private conService: ConverService,
    private router: Router) { }


  classyMenu = 'dggg';


  isLogged!: boolean;
  onCheck!: boolean;
  onClick!: boolean;
  onClient!: boolean;
  username!: string;
  dasboard!: string;
  nam!: string;
  lasn!: string;
  person = new Person(this.nam, this.lasn);
  mynam!: string;
  iSued!: boolean;


  loading = true;

  ngOnInit(): void {
    this.sessionService.islogged() ? this.isLogged = true : this.isLogged = false;
    if (this.isLogged) {
      this.sessionService.isloggeda() ? this.dasboard = "/admindasboard" : this.dasboard = "/utilisation";
      
      this.person = this.sessionService.getPerson();
      this.mynam = this.conService.thisiswhat(`${this.person.name}â${this.person.lastname}`)

    }

    this.connecto.increaseActivity().subscribe(() => {
      //generaTor()
      //this.connecto.incDef().subscribe(() => {
      //});
    });

  }


  onOption(chan: any): void {
    this.classyMenu = chan === 'menu-on' ? "dggg" : 'menu-on';
  }






  logOut(): void {
    this.sessionService.logOut();
    window.location.reload()
  }

}

