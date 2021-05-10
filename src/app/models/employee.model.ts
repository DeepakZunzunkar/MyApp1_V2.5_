export class Employee
{
    id : number;
    name:string;
    email?:string;  // ? indeicate that this property is optional
    gender:string;
    phoneNumber:number;
    contactPreperance:string;
    dateOfBirth:Date;
    dateOfJoining?:Date;
    department:string;
    isActive:boolean;
    photoPath?:string;
    password?:string;
    confirmPassword?:string;
}