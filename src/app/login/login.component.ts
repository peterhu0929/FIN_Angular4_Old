import {Component, OnInit} from '@angular/core';
import {AppSessionService} from '../session/app-session.service';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

// model: any = {};
  private username: string = 'IRENE';
  private password: string = 'IRENE';
  private moudle: string = 'ILIS';

  private loading = false;
  private error = '';

  private sysMoudles: { code: string, name: string }[];

  constructor(private  appSessionService: AppSessionService,
              private  autherticationService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.sysMoudles = [
      {'code': 'ILIS', 'name': 'ILIS'},
      {'code': 'YMGA', 'name': 'YMGA'},
      {'code': 'VENDOR', 'name': 'Vendor'},
    ];

    this.moudle = this.sysMoudles[0].code;

    // reset login status
    this.autherticationService.logout();
  }

  Login(): void {
    this.appSessionService.login();
    this.autherticationService.login(this.username, this.password, this.moudle);
    // alert(this.autherticationService.getMessage());
  }

}
