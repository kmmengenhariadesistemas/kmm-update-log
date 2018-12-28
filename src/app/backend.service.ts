import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private username: string = "admincorp";
  private password: string = "-9Ad!<ww";

  private url: string = "http://portal.kmm.com.br/_remote/gateway.php";
  private token: string;

  constructor(private httpClient: HttpClient) { }

  requestToken():Observable<any> {
    return new Observable<any>(observer => {
      this.backendCall("LOGON", "LOGON", 
        { username: this.username, 
          password: this.password, 
          cod_gestao: 9
        }).subscribe(a => {
          this.token = a.token;
          observer.next(a)
        })
      });
  }

  backendCall(module:string, operation: string, data: any): Observable<any> {
    return new Observable<any>(observer => {
      if (!this.token && operation != "LOGON") {
        this.requestToken().subscribe(b => {
          this.httpClient.post<any>(
            this.url, 
            { module: module, 
              operation: operation, 
              parameters: data }, 
            { headers: { Authorization: this.token}}
          ).subscribe(a => observer.next(a.result)); 
        })
      } else {
        this.httpClient.post<any>(
          this.url, 
          { module: module, 
            operation: operation, 
            parameters: data }, 
          { headers: { Authorization: operation!="LOGON"?this.token:""}}
        ).subscribe(a => observer.next(a.result));
      }
    })
    
  }
}
