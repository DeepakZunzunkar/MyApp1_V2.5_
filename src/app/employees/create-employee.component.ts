import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { Departemnt } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

//router service
import { Router, ActivatedRoute } from '@angular/router';

//service
import { EmployeeService } from '../service/employee.service'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  emp: Employee;

  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;

  //to check form is dirty or not and providing access to the template refference variable in the component class
  @ViewChild('employeeForm')
  public createEmployeeForm : NgForm;

  //form model
  employee: Employee ;

  departments: Departemnt[] = [

    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 5, name: "CTECH" }
  ]

  constructor(private _empService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) {

    //Object.assign : it is used for copying property value from one or more source object to a destination object 
    this.datePickerConfig = Object.assign({},
      {
        dateInputFormat: 'DD/MM/YYYY', //must be capital letter
        containerClass: 'theme-dark-blue',
        // showWeekNumbers:false,
        // minDate:new Date(2018,0,1),
        // maxDate:new Date(2018,11,31),

      })

  }

  togglephotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {

    this._route.paramMap.subscribe((parameterMap)=>{

      const id=+parameterMap.get('id');
      this.getEmployee(id);

    })

  }
  getEmployee(id){

    if(id == 0)
    {
      this.employee= {

        id: null,
        name: null,
        email: '',//null,
        contactPreperance: null,
        gender: null,
        phoneNumber: null,
        department: '-1', //null,
        isActive: null,
        dateOfBirth: null,
        photoPath: null,
        dateOfJoining: null,
        password: null,
        confirmPassword: null
    
      };

    }else{
     
      this.employee=this._empService.getEmployee(id);
    }
    
  }
  // saveEmployee(employeeForm: NgForm): void {
  //   //console.log(employeeForm.value);
  //   console.log(employeeForm);
  //   this.emp = employeeForm.value;
  //   console.log(this.emp);

  // }
  // saveEmployee(employeeForm: Employee): void {
  //   //console.log(employeeForm.value);
  //   console.log(employeeForm);
  // }

  saveEmployee(): void {

    const newEmployee : Employee = Object.assign({} ,this.employee)

    this._empService.saveEmployee(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']); //this line trigering our canDeactivate route    
  
  }


}
