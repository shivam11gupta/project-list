import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: object[] = [];

  constructor(private http: HttpClient) {

  }

  getUserList(){
    return this.http.get<any[]>('https://dummyjson.com/users');
  }

  getInheritedName() {
    console.log('inherited name from service: shivam gupta');
  }
}

