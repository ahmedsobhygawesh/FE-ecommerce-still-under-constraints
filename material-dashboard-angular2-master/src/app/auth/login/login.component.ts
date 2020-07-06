import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {CurrentAndLoginUserModel} from "../../models/CurrentAndLoginUserModel";
import {MatSnackBar} from "@angular/material/snack-bar";
import {stringify} from "querystring";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentAndLoginUser: CurrentAndLoginUserModel = {};
  constructor(private router: Router, private authService: AuthenticationService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.currentAndLoginUser).subscribe((value: CurrentAndLoginUserModel)  => {
      localStorage.setItem(value.mobile, stringify(value));
      return this.navigateToDashboard();
    }, error => {
      this.openSnackBar(5000, "Not Authorized For Login", "close");
    });
  }

  navigateToRegister() {
    return this.router.navigateByUrl('register');
  }

  public navigateToDashboard() {
    return this.router.navigateByUrl('home');
  }

  openSnackBar(during: number, message: string, actionString: string) {
    this.snackBar.open(message, actionString, {
      duration: during,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }

}
