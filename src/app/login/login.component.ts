import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login, Register } from '../model/auth.dto';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authented!: Login;
  rejected = 'not-rejet';
  load28 = 'tohi';

  phone!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private tokenService: SessionService,
    private router: Router) { }


  onLogin(): void {
    this.load28 = "load28"
    this.authented = new Login(this.phone, this.password);
    this.authService.login(this.authented).subscribe((data) => {
      if (!data.ee) {
        this.load28 = "tohi"

        const admin = this.tokenService.setToken(data.token);
        if (admin) {
          this.router.navigate(['/admindasboard']);
        } else {
          this.router.navigate(['/utilisation']);
        }

      } else {
        this.load28 = "tohi"
        this.rejected = 'rejected';
        setTimeout(() => {
          this.rejected = 'not-rejet';

        }, 3000);
      }

    });
  }
}
