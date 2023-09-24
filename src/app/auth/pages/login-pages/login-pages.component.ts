import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {

  formInputs:FormGroup  = new FormGroup({});
  verifyDataSession:boolean = false;;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.initInputs();
  }

  public initInputs():void{
    this.formInputs = new FormGroup({
      usuario: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
  }

  public login():void{
    console.log(this.formInputs);
    const {usuario, password} = this.formInputs.value;
    if (usuario==='piero' && password=== '123456') {
      this.verifyDataSession = false;
      this.router.navigate(['/','home'])
    }else{
      this.verifyDataSession=true;
    }
  }
}
