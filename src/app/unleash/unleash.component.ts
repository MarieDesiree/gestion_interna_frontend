import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { ConverService } from '../conver.service';
import { Person } from '../model/auth.dto';


@Component({
  selector: 'app-usage',
  templateUrl: './unleash.component.html',
  styleUrls: [
    './unleash.component.scss',
    './neededlinks/bootstrap.min.css',
    './neededlinks/styles711f.css',
    './neededlinks/main.aff4d0f3.css',
    './neededlinks/unleash_on-demand.css',
  ]

})

export class UnleashComponent implements OnInit {
  constructor(
    private sessionService: SessionService,
    private conService: ConverService,
    private router: Router) { }

  classyMenu = 'dggg';

  nam!: string;
  lasn!: string;
  person = new Person(this.nam, this.lasn);
  mynam!: string;


  ngOnInit(): void {
    this.person = this.sessionService.getPerson();
    this.mynam = this.conService.thisiswhat(`${this.person.name}â${this.person.lastname}`)
  }

  onOption(chan: any): void {
    console.log(chan)
    this.classyMenu = chan === 'menu-on' ? "dggg" : 'menu-on';
  }


  logOut(): void {
    this.sessionService.logOut();
    window.location.reload()
  }
}
