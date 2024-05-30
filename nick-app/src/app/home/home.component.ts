import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  employees!: Employee[];

  constructor(private appService: AppService) { }

  ngOnInit() {
      this.appService.getEmployees().subscribe(data => {
        this.employees = data;
      });
  }

}
