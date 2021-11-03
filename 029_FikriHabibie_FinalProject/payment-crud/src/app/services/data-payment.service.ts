import { Injectable } from '@angular/core';
import { payment } from '../models/payment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataPaymentService {
  endpoint: string = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const api = `${this.endpoint}Payment`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  getDataUpdated(id:number): Observable<any>{
    const api = `${this.endpoint}Payment/${id}`;
    return this.http.get(api).pipe(
      map((res)=>{
        return res  || {}
      }),catchError(this.handleError)
    )
  }

  addData(payments: payment): Observable<any>{
    const api = `${this.endpoint}Payment`;
    return this.http.post(api, payments).pipe(catchError(this.handleError))
  }

  updateData(payments: payment, id:number): Observable<any>{
    const api = `${this.endpoint}Payment/${id}`;
    return this.http.put(api, payments).pipe(catchError(this.handleError))
  }

  deleteData(id: number): Observable<any>{
    const api = `${this.endpoint}Payment/${id}`;
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
