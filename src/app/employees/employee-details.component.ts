import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router'
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee.model';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee : Employee;

  //to keep track of id ,route parameter value 
  private _id : number;
  

  constructor(private _route : ActivatedRoute, 
              private _empService: EmployeeService,
              private _router : Router) { }

  ngOnInit() {
    
    // const id= +this._route.snapshot.params['id'];
    //this._id= +this._route.snapshot.paramMap.get('id');

    //every time route parameter value changes we recieive notification
    this._route.paramMap.subscribe( params => {

      this._id= +params.get('id');
      this.employee=this._empService.getEmployee(this._id);
    });  
    
    
  }

  viewNextEmployee()
  {
    if(this._id < 3 )
    {
      this._id=this._id+1;
    }else{
      this._id=1;
    }
    this._router.navigate(['/employees',this._id],{
      queryParamsHandling :"preserve"
    });
  }
}
