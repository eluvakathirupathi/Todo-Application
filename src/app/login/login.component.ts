import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uname='thiru';
  pass='pass';
  invalidLogin=false;
  message='Hey user';

  constructor(private router: Router, private auth: HardcodedAuthenticationService){

  }

  login(){
    // console.log(this.uname)
    // console.log(this.pass)
    // if(this.uname==="thiru" && this.pass==="pass")
      if(this.auth.authenticate(this.uname,this.pass))
      {
      this.invalidLogin=false;
      this.message="hey: ";
      this.router.navigate(['welcome',this.uname]);
    }
    else{
      this.invalidLogin=true;
      this.message = "Invalid credentials: ";
    }
  }

}
