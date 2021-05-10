import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable,of } from "rxjs";
import { delay } from 'rxjs/operators';


@Injectable()
export class EmployeeService{

    private listEmployees :Employee[]=[

        {
            id: 1,
            name: 'dinesh',
            email: 'ds@gmail.com',   
            gender: 'male',
            phoneNumber: 1234567891,
            contactPreperance: 'email',
            dateOfBirth: new Date('04/13/1992'),
            dateOfJoining:new Date('05/13/2000'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/dinesh.png',
          },
          {
            id: 2,
            name: 'kundan',
            email: 'kn@gmail.com', 
            gender: 'male',
            phoneNumber: 8855223366,
            contactPreperance: 'email',
            dateOfBirth: new Date('12/29/1993'),
            dateOfJoining:new Date('05/14/2000'),
            department: '5',
            isActive: true,
            photoPath: 'assets/images/kundan.png',
          },
          {
            id: 3,
            name: 'vimal',
            email: 'dvs@gmail.com', 
            gender: 'female',
            phoneNumber: 775533995511,
            contactPreperance: 'email',
            dateOfBirth: new Date('1/15/1991'),//  mm/dd/yy
            dateOfJoining:new Date('06/15/2000'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/vimal.png',
          },
    ];

    getEmployees() : Observable< Employee[] >
    {
        //several way to create Observable
        //simplest way to create observable is by using rxjs 'of' operator 
        return of(this.listEmployees).pipe( delay(2000));
    }
    // getEmployees() : Employee[]{
    //    return  this.listEmployees;
    // }
    
    getEmployee(id :number) : Employee{
        return this.listEmployees.find(e => e.id === id);
    }


    saveEmployee(employee : Employee)
    {
        this.listEmployees.push(employee);
    }
}