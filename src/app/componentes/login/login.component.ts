import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../baseComponent';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
//import { DataBase } from '../modelos/base';
import { LoginService } from 'src/app/servicios/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
//import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit  {


  tamano : any = { col : 1};
  tamano2 : any = { col : 1};
  hidePassword = true;
  loginForm = new FormGroup({
    correo: new FormControl('prueba@gmail.com', [Validators.required,]),
    clave: new FormControl('123456', [Validators.required]),
  })


  constructor(
    public cookieService: CookieService,
    private router: Router,
    private ls: LoginService,
    private spinner : NgxSpinnerService
    //private m :MenuService
    ) {
      super();
    }

  ngOnInit(): void {
    this.cookieService.set("token", "");
  }

  login() {
    debugger;
    this.spinner.show();
    if (this.loginForm.valid) {
      this.loanding = true;
       this.ls.login(this.loginForm.value).subscribe(req => {
        this.cookieService.set("token", req.data.token);
        this.router.navigate(["/index/"]);
        this.spinner.hide();
      }, error => {
        this.loginForm.reset();
        this.error(error);  
        this.loanding = false; 
        this.spinner.hide();       
      }, () => this.loanding = false)
    }
  }

}
