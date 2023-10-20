import { Router } from '@angular/router';
import { SesionService } from './../../../core/services/sesion.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      user: new FormControl(),
      password: new FormControl(),
      admin: new FormControl(),
    })
  }

  ngOnInit(): void { }

  login() {
    //le pasamos lo valores del formulario de sesion
    console.log(this.formulario.value);

    this.sesionService.Login(
      this.formulario.value.user,
      this.formulario.value.password,
      this.formulario.value.admin
    )
      this.router.navigate(['inicio']);
  }

}
