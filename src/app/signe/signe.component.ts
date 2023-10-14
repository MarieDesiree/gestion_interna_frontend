import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../activity.service';
import { AuthService } from '../auth.service';
import { Register } from '../model/auth.dto';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signe',
  templateUrl: './signe.component.html',
  styleUrls: ['./signe.component.scss']
})
export class SigneComponent {

  authented!: Register;

  rejected = 'not-rejet';
  load28 = 'tohi';

  name!: string;
  lastname!: string;
  phone!: string;
  mail!: string;
  password!: string;
  admin: boolean = false;



  constructor(
    private authService: AuthService,
    private connecto: ActivityService,
    private sessionService: SessionService,
    private router: Router) { }


  onSignUp(): void {
    this.load28 = "load28";
    this.authented = new Register(this.name, this.lastname, this.phone, this.mail, this.password, this.admin);
    this.authService.register(this.authented).subscribe(data => {
      if (!data.ee) {
        this.load28 = "tohi";

        this.connecto.incCom().subscribe(() => {

          const admin = this.sessionService.setToken(data.token);
          if (admin) {
            this.router.navigate(['/admindasboard']);
          } else {
            this.router.navigate(['/utilisation']);
          }
        })
      } else {
        this.load28 = "tohi";

        this.rejected = 'rejected';
        setTimeout(() => {
          this.rejected = 'not-rejet';

        }, 3000);
      }
    })
  }


}


