import { Injectable } from '@angular/core';
import { User } from '../types/User.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(id: number): User {
    return this.getAllUsers()[id];
  }

  getAllUsers(): User[] {
    return [
      {
        id: 1,
        email: 'admin@admin.com',
        pass: 'admin123'
      }
    ]
  }
}
