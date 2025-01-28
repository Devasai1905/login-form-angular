import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dashboardModulel } from './dashboard.modulel';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formValue!: FormGroup;
  dashboardModelobj: dashboardModulel = new dashboardModulel();
  employeeData !: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    });

    this.getAllEmployee();
  }

  postEmployeeDetails() {
    this.dashboardModelobj.firstName = this.formValue.value.firstName;
    this.dashboardModelobj.lastName = this.formValue.value.lastName;
    this.dashboardModelobj.email = this.formValue.value.email;
    this.dashboardModelobj.mobile = this.formValue.value.mobile;
    this.dashboardModelobj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.dashboardModelobj).subscribe(
      (res: any) => {
        console.log('Employee Added:', res);
        alert('Employee Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
      (err: any) => {
        alert('Something went wrong');
      }
    );
  }

  getAllEmployee() {
    this.api.getEmployees().subscribe((res: any) => {
      this.employeeData = res;
    })
  }
  deleteEmployee(row: any): void {
    this.api.deleteEmployee(row.id)  
      .subscribe(
        (res: any) => {
          console.log('Employee Deleted:', res);
          alert('Employee Deleted Successfully');
          this.getAllEmployee();  
        },
        (err: any) => {
          alert('Something went wrong while deleting the employee');
        }
      );
  }
}