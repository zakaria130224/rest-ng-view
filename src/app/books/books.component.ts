import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = 'Books';
  dtOptions: DataTables.Settings = {};
  posts:any=[
    {id:"BH0001",name:"Himur moddhodupur",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0002",name:"Feluda1",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0003",name:"Bomkesh1",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0004",name:"Feluda1 dd",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0005",name:"Feluda1 sdweew",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0006",name:"Feluda1 wwe",isbn:"IGDJ-75666554-774",published_at:2019},
    {id:"BH0007",name:"Feluda1 cvxv",isbn:"IGDJ-75666554-774",published_at:2019},
  ];
   
  //dtTrigger: Subject<any> = new Subject<any>();
 constructor(private http: HttpClient) { }

  ngOnInit():void {
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
   
    // this.http.get('http://jsonplaceholder.typicode.com/posts/2/comments')
    //   .subscribe(posts => {
    //     this.posts = posts;
    //     this.dtTrigger.next(this);
    // });
   
  }
  // ngOnDestroy():void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }

}
