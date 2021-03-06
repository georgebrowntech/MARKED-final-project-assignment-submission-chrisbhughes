// gst-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ],
        player_time: ['', Validators.required ],
        player_game: ['', Validators.required ]
      });
    }
    updateBusiness(person_name, business_name, business_gst_number,player_time,player_game) {
      this.route.params.subscribe(params => {
         this.bs.updateBusiness(person_name, business_name, business_gst_number,player_time,player_game,params['id']);
         this.router.navigate(['business']);
   });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }
}