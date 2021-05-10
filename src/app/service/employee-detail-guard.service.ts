import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";

//this component  return true  if the route can be Activated otherwise false 
@Injectable()
export class EmployeeDetailsGuardService implements CanActivate{

    constructor(private  _employeeService : EmployeeService,
                private _router : Router ){

    }

    //if the employee with specified id exist then we want to return true so the route is activated 
    //if employee does not exist ,then we want to redirect user to the page not found component and return false so the route is not activated
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        
        //to get id from the url we can make use of ActivatedRouteSnapshot parameter 
        //right here this get method is going to return the parameter value as string we need to convert that to a number to that we simply use '+' sign
        //return type of this._employeeService.getEmployee is an Object what we want to this do  is  return true if the employee exist 
        //otherwise false so to convert the result to boolean  we use two (exclametion)!! mark 
        const employeeExist =!!this._employeeService.getEmployee(+route.paramMap.get('id'))

        if(employeeExist)
        {   
            //to continue route activation
            return true;
        }else{

            this._router.navigate(['notfound']);
            return false; 
        }
         
    }

}