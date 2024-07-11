import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {UserDTO} from "../../model/UserDTO";
import {LoginRequest} from "../../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  URL: string = "http://localhost:8080/api/utente";

  getAll():Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>("http://localhost:8080/api/utente").pipe(retry(3));
    catchError(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred: ' +error.error);
    } else {
      console.error(`Backend returned error: ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something went wrong'));
  }

  login(user: LoginRequest): Observable<string> {
    return this.http.post<string>("http://localhost:8080/api/utente/login", user).pipe(retry(3)).pipe(
      catchError(this.handleError)
    );
  }

  findUserByMail(email: string): Observable<UserDTO> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get<UserDTO>("http://localhost:8080/api/utente/" + email, {headers}).pipe(retry(3)).pipe(
      catchError(this.handleError)
    )
  }
}
