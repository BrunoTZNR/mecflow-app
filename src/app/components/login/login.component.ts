import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  error: string = '';

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      pass: ''
    });
  }

  entrar(): void {
    this.userService.findByLogin(this.form.value.email)
      .subscribe({
        next: (data) => {
          if(data.pass == this.form.value.pass) {
            this.router.navigate(['home']);
          } else {
            this.error = "senha inválida!"

            console.log(this.error);
          }
        },
        error: error => {
          this.error = error.error;

          console.log(this.error);
        }
      });
  }
}
