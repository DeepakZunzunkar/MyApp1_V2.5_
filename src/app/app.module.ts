import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//user defined component
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';


//router
import { RouterModule ,Routes} from '@angular/router'

//services
import { EmployeeService } from './service/employee.service'

//guard service
import { CreateEmployeeCanDeactivateGuardService } from './service/create-employee-can-deactivate-guard.serive'

//custom validator 
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive'
import { confirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive'

//for date formating 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


//filters
import { EmployeeFilterPipe } from './filters/employee-filter.pipe';

//resolve service or guard
import { EmployeeListResolverService } from './service/employee-list-resolver.service';
import { resolve } from 'dns';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { EmployeeDetailsGuardService } from './service/employee-detail-guard.service';

const appRoutes : Routes =[
  
  { 
    path : 'list' ,
    component : ListEmployeesComponent,
    resolve :{ prefetchEmployeeList : EmployeeListResolverService }
  },
  { 
    path : 'edit/:id',
    component : CreateEmployeeComponent,
    canDeactivate :[ CreateEmployeeCanDeactivateGuardService ]  
  },
  {           //route with parameter . multiple :- employees/:id/:gender
    path : 'employees/:id' ,
    component : EmployeeDetailsComponent,
    canActivate :[EmployeeDetailsGuardService]
  },
  { path : '', redirectTo : '/list' ,pathMatch :'full' },
  { path : 'notfound' ,component : PageNotFoundComponent },

];


@NgModule({

  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    confirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,EmployeeListResolverService,EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})


export class AppModule {


 }

