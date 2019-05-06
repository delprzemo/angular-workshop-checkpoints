import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLogin } from './models/user-login.model';
import { FormControl } from '@angular/forms';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  isLoginForm = false;
  loginModel: UserLogin;
  @ViewChild('form') form: FormControl;

  constructor(private accountService: AccountService) {
      this.loginModel = new UserLogin();
   }

  ngOnInit() {
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
    type token = {token: string};
    if (this.form.valid) {
      this.accountService.logIn(this.loginModel.email, this.loginModel.password).subscribe((response: token) => {
        this.accountService.getUserData().subscribe(userData=> {
          this.accountService.setActiveUser(this.loginModel.email, 
            this.loginModel.password, 
            response.token, 
            userData.data.avatar);
        });
      })
    }
  }

  cancel() {
    this.isLoginForm = false;
  }

  isLogged(): boolean {
    return  this.accountService.isLogged();
  }

  logout() {
    this.accountService.logOut();
    this.isLoginForm = false;
  }

  getUser() {
    return this.accountService.getUser();
  }
}
