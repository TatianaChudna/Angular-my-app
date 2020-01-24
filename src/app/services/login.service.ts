import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any;

  constructor(
    private api: ApiService
  ) {
  }

  login(success, body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'token'
      })
    };

    return this.api.post({
      url: '/api/login',
      handlers: {
        success,
        error: this.error.bind(this)
      },
      body,
      httpOptions
    });
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  error(error) {
    console.log('error', error);
  }
}
