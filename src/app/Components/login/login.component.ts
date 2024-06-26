import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any = {
    userName: '',
    password: ''
  }
  constructor(private _AuthService:AuthService , private _Router:Router)  {}
  isLoading:boolean =false;
  msgError:string="";
  logInForm :FormGroup =new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*()_+\-=\[\]{}|;':"\\,.<>\/?]).{6,20}$/)]),
  });

handleForm():void
{
  if(this.logInForm.valid)
    {
      this.isLoading=true;
      this._AuthService.setLogIn(this.userData).subscribe({
        next:(response)=>{
          console.log(response);
          this.isLoading=false;
              localStorage.setItem('eToken',response.message.token);
              this._AuthService.decodeUserData();
              if(response.isPass==true)
                {
              this._Router.navigate(['/home']);
                }
        },
        error:(err:HttpErrorResponse)=>{
          this.isLoading=false;
          this.msgError=err.error.message;
          console.log(err);
        }
      })
    }
    else
    {
      this.logInForm.markAllAsTouched();
    }
}

}
