import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtRequestModel} from '../../models/JwtRequestModel';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {isSuccess} from '@angular/http/src/http_utils';
import {UserModel} from "../../models/UserModel";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usr: UserModel = {};

  ngOnInit(): void {
  }

  constructor(private authService: AuthenticationService, private router: Router, public snackBar: MatSnackBar,
              private localStorageService: LocalStorageService) {
  }

  openSnackBar(during: number, message: string, actionString: string, className: string) {
    this.snackBar.open(message, actionString, {
      duration: during,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [className],
    });
  }

  registration() {
    this.authService.registration(this.usr).subscribe(value => {
      console.log("Done");
      this.openSnackBar(500, 'Registered', 'Close', 'green-snackbar');
      console.log("Done")
      return this.navigateToLogin();
      }, error => {
       this.openSnackBar(5000, 'Failed', 'Close', 'red-snackbar');
    });
  }

  navigateToLogin() {
    return this.router.navigateByUrl('login');
  }



}
