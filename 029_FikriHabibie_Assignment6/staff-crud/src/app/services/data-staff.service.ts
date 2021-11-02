import { Injectable } from '@angular/core';
import { staff } from '../models/staff';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataStaffService {

  endpoint: string = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const api = `${this.endpoint}Users`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  addData(user: staff): Observable<any>{
    const api = `${this.endpoint}Users`;
    return this.http.post(api, user).pipe(catchError(this.handleError))
  }

  updateData(user: staff, id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    return this.http.put(api, user).pipe(catchError(this.handleError))
  }

  deleteData(id: number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    alert("Delete Success")
    return this.http.delete(api, {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json' 
      })
    })
  }

  handleError(err: HttpErrorResponse){
    let msg = '';
    if(err.error instanceof ErrorEvent){
      msg = err.error.message;
    } else{
      msg = `Error Code: ${err.status}\n Message: ${err.message}`;
    }
    alert(msg)
    return throwError(msg)
  }
}
