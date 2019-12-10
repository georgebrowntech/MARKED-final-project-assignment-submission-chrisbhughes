// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {


  uri = 'https://ac-backend-prod.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number, player_time, player_game, player_ava) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number,
      player_time: player_time,
      player_game:player_game,
      player_ava:player_ava
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }
  getLobby() {
    return this
           .http
           .get(`${this.uri}`);
  }
  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  joinBusiness(id) {
    return this
            .http
            .get(`${this.uri}/joingame/${id}`);
  }
  
    updateBusiness(person_name, business_name, business_gst_number,player_time, player_game, id) {

      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number,
          player_time: player_time,
          player_game:player_game
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}