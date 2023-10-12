import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  users = {
    email: 'admin@admin.com',
    pass: 'admin123'
  };

  error: string = '';

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: '',
      pass: ''
    });
  }

  entrar(): void {
    if (this.formGroup.value.email == this.users.email &&
      this.formGroup.value.pass == this.users.pass) {
      this.router.navigate(['home']);
    } else {
      this.error = 'Usuário invalido!';

      console.log(this.error);
    }
  }
}
