import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { Tenant } from './../models/tenant.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy,OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts:any;
   
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient,private spinner: NgxSpinnerService) { }
   
  ngOnInit():void {
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.spinner.show();
    //this.http.get<Tenant[]>('http://demo.provincialkid.xyz/mm/tenant');
     this.http.get('http://jsonplaceholder.typicode.com/posts')
    //this.http.get('http://demo.provincialkid.xyz/mm/tenant')
      .subscribe(posts => {
        this.posts = posts;
        this.dtTrigger.next(this);
         this.spinner.hide();
    });
    
  
  }
  ngOnDestroy():void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
