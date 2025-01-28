// import { Injectable } from '@angular/core';
// import { HttpClient, } from '@angular/common/http'
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor( private http : HttpClient) { }

//   postEmploye(data : any){
//     return this.http.post<any>("http://localhost:3000/posts", data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
//   updateEmploye(data :any,id: number){
//       return this.http.put<any>("http://localhost:3000/posts",+id,data)
//       .pipe(map((res:any)=>{
//         return res;
//       }))
//     }
//     deleteEmploye(data :any,id: number){
//       return this.http.put<any>("http://localhost:3000/posts",+id)
//       .pipe(map((res:any)=>{
//         return res;
//       }))
//     }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/employees'; // Assuming this is the correct base URL

  constructor(private http: HttpClient) {}

  postEmployee(data: any): Observable<any> {
    
    return this.http.post(this.baseUrl, data); // POST to /employees
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl); // GET from /employees
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
  
}
