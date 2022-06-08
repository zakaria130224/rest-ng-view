import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Tenant } from './../models/tenant.model';
import { TenantService } from './../services/tenant.service';
import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})

export class TenantComponent implements OnInit,OnDestroy {

@ViewChild('closebutton') closebutton: any;
  title = 'Tenant';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  tenantList:any;
  newTenant:Tenant;
   @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  
 constructor(private tenantService: TenantService,private router:Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { 
 }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
     this.spinner.show();
    this.tenantService.getAll().subscribe(data=>{
      try {
       
      this.tenantList=data;
      this.dtTrigger.next(this);
      this.spinner.hide();
      } catch (error) {
         console.log(error);
      }
      
    });
    this.newTenant= new Tenant();
  
  }
  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
      
  }

  save():void{
    console.log(this.newTenant)
    this.tenantService.create(this.newTenant).subscribe(data=>{
      this.toastr.success('Success', "data.");
      //Close modal
      this.closebutton.nativeElement.click();

      //Reload data
      this.tenantService.getAll().subscribe(data=>{
      try {
      this.tenantList=data;
      this.rerender();
      } catch (error) {
         console.log(error);
      }
      
    });
       //this.router.onSameUrlNavigation = 'reload';
      //this.router.navigate(['/dashboard/tenant']);
    });
  }

  rerender() 
    {
        this.dtElement.dtInstance.then((dtInstance : DataTables.Api) => 
        {
            // Destroy the table first in the current context
            dtInstance.destroy();

            // Call the dtTrigger to rerender again
           this.dtTrigger.next(this);

        });
    }


}
