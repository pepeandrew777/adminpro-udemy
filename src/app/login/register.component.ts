import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Ingreso a register');
  }

}
