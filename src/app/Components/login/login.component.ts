import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login.model';
import { response } from 'src/app/Models/response.model';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model=new Login();
  constructor(private loginService:LoginService,private router: Router) { 
   if(localStorage.getItem('jwt')!=""){
     this.router.navigate(['/']);
   }
  }

  ngOnInit(): void {
  }
  login():void{
     console.log(this.model);
     if(this.model.username==""&&this.model.password==""){
       alert("Enter username and password");
     }
     else
     {
       this.loginService.loginUser(this.model).subscribe(data=>{
        localStorage.setItem("jwt",data.token);
        this.router.navigate(['/']);
       },
       error=>{
         if(error.error.status==401){
           alert("Invalid Username or Password");
         }
       }
       )
     }
  }
}
