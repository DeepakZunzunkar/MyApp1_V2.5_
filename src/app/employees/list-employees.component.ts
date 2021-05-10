import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
// import { EmployeeService } from '../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({

  //for routing we dont need selecter
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  //used to store full list of employee
  employees: Employee[];

  //track search term
  private _searchTerm: string;

  //it is used to store filterd list of employee
  filteredEmployees: Employee[];


  //setter and getter
  //property name searchTerm without underscore 
  //search box bind with this getter and setter
  get searchTerm(): string {
    return this._searchTerm; //getter is called everytime when we need the value of this property 
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    //in adition to assign value we want to filter employee
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString: string) {

    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor( //private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.employees = this._route.snapshot.data['prefetchEmployeeList'];

    this._route.queryParamMap.subscribe((queryParams) => {

      if (queryParams.has('searchTerm')) {
        this.searchTerm = queryParams.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
        //console.log("Else : " + new Date().toString());
      }

    })

  }

  ngOnInit() {
  }

  
  
}
