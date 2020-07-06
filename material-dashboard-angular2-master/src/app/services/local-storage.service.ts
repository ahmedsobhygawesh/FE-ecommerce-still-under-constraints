
import {Observable} from 'rxjs';
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( ) {
   }

  saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  retrieveFromLocalStorage(key): string {
    return localStorage.getItem(key);
  }

}
