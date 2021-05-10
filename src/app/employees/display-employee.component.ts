import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input()
  employee: Employee;

  @Input()
  searchTerm: string;

  public selectedEmployeeId: number;

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  EditEmployee() {
    this._router.navigate(['/edit', this.employee.id])
  }

  ViewEmplyee() {
    //link parameter array ['/employees', EmployeeId]
    //in addition to employeeId we can pass searchTerm as query string paramter 
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }

    })
  }


}
