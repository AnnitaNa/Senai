import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  //regForm = new User();

  onSubimit() {
    
  }

}
