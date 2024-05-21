import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(name:string,pass:string){
    if(name==="nithin" && pass==="1234"){
      return 200
    }else{
      return 403
    }
  }

  logOut(){
    this.router.navigate(['login'])

  }
}
