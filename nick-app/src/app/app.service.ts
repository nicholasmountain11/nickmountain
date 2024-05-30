import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private urlStr: string;

  constructor(private http: HttpClient) { 
    this.urlStr = "http://localhost:8080/employees"
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlStr)
  }

  
}
