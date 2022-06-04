import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private loginService: LoginService, private router: Router) { }

  loginModel = new User();
  mensagem ="";

  onSubmit() {
    this.loginService.login(this.loginModel).subscribe(
        (verdade) =>{ 
          this.mensagem = "sucesso!"
          this.router.navigateByUrl("")
        }, 
        (erro) => { this.mensagem = erro.error}
    )
  }

}


