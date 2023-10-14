import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConverService } from '../conver.service';
import { LicenceG } from '../formules/activity';
import { Person, Register } from '../model/auth.dto';
import { SessionService } from '../session.service';
import { ActivityService } from '../activity.service';
/*
<thead>
            <tr>
                <th scope="col">2</th>
                <th scope="col">3 (A<sup>B</sup>C)</th>
                <th scope="col">4</th>
               
            </tr>
        </thead>
        
        */
@Component({
  selector: 'app-clientdasboard',
  templateUrl: './clientdasboard.component.html',
  styleUrls: ['./clientdasboard.component.scss']
})
export class ClientdasboardComponent implements OnInit {
  licence!: LicenceG;

  nam!: string;
  lasn!: string;
  person = new Person(this.nam, this.lasn);
  mynam!: string;
  licencd: LicenceG[] = [];
  persons: Register[] = [];
  creat: boolean = false
  classyMenu = 'dggg';


  constructor(
    private sesService: SessionService,
    private conService: ConverService,
    private actService: ActivityService,
    private router: Router) { }




  ngOnInit(): void {
    this.person = this.sesService.getPerson();
    this.mynam = this.conService.thisiswhat(`${this.person.name}â${this.person.lastname}`)
    this.fetchData()
  }

  onCopy(data: any): void {
    navigator.clipboard.writeText(data).then(() => console.log("done")).catch((r) => console.log(r))

  }

  homeGo(): void {
    window.location.replace("/");
  }

  onLicenp(): void {
    this.mynam = this.conService.thisiswhat(`${this.person.name}â${this.person.lastname}`)
    this.creat = !this.creat;
  }


  onOption(chan: any): void {
    this.classyMenu = chan === 'menu-on' ? "dggg" : 'menu-on';
  }


  fetchData() {
    this.actService.getPersons().subscribe((da) => {
      this.persons = da
    });
  }


  logOut(): void {
    this.sesService.logOut();
    this.router.navigate(['/login']);
  }
}