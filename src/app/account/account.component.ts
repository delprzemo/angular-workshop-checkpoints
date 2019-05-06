import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLogin } from './models/user-login';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  isLogged = false;
  isLoginForm = false;
  loginModel: UserLogin;
  @ViewChild('form') form: FormControl;

  constructor() {
      this.loginModel = new UserLogin();
   }

  ngOnInit() {
  }

  openLoginForm() {
    this.isLoginForm = !this.isLoginForm;
  }

  login() {
    if (this.form.valid) {
      this.isLogged = true;
      console.log(this.loginModel);
    }
  }

  cancel() {
    this.isLoginForm = false;
  }

  logout() {
    this.isLogged = false;
    this.isLoginForm = false;
  }
}
