import { Tenant } from './../models/tenant.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http:HttpClient) { }

  getAll(){
  return this.http.get<Tenant[]>('https://demo.provincialkid.xyz/mm/tenant');
   //console.log(this.http.get<any>('http://localhost:88/restapi/tenant'));
  } 

  create(newTenant:Tenant){
    return this.http.post("https://demo.provincialkid.xyz/mm/tenant/create",JSON.stringify(newTenant));
  }
}
