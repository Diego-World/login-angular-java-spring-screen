import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-login', // Esse a tag do componente user-login, criado com o comando 'ng g c user-login', que ao ser referenciado no app.component integra ao app.html
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  user:User = new User();
  
  constructor(){}

  ngOnInit(): void {
    
  }

  userLogin(){
    console.log(this.user)
  }
}
