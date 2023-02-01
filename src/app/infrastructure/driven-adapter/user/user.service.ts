import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { CreateUserGateway } from 'src/app/domain/models/user/gateway/user.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CreateUserGateway {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  // API_USERS : string = 'https://regres.in/api/users';
  API_USERS : string = 'https:/jsonplaceholder.typicode.com/users';
  
  constructor(public http: HttpClient) {
    super();
   }

   createUser(params:any): Observable<any>{
    return this.http.post<any>(this.API_USERS, params, {
      headers: this.httpHeaders
    });
   }
}
