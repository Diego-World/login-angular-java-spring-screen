import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login', // Esse a tag do componente user-login, criado com o comando 'ng g c user-login', que ao ser referenciado no app.component integra ao app.html
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  user:User = new User();
  
  constructor(private loginuserService:LoginuserService){}

  ngOnInit(): void {
    
  }

  userLogin(){
    console.log(this.user)
    this.loginuserService.loginUser(this.user).subscribe(data=>{
      alert("Login Feito com sucesso")
    },error=>alert("Por favor forneça um usuário e senha válidos"))
  }
}
