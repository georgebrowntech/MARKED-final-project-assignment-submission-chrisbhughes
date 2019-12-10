import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],

    });
  }

  addBusiness(person_name, busines_name, business_gst_number, player_time, player_game, player_ava) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number, player_time, player_game,player_ava);
  }

  ngOnInit() {
  }

}