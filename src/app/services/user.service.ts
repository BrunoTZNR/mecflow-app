import { Injectable } from '@angular/core';
import { User } from '../types/User.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'api/v1/users';

  constructor(private http: HttpClient) { }

  //findByLogin
  findByLogin(login: string) {
    return this.http.get<User>(`${this.API}/${login}`);
  }
}
