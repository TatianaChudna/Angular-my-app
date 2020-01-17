import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../models/login.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');

@Injectable()
export class UserService {
  userUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  addUser(user: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.userUrl, user, httpOptions);
  }
}
