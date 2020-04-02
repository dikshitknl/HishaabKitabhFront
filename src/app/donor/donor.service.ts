import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppState } from '../app.model';
import { Store, select } from '@ngrx/store';



@Injectable({
  providedIn: "root"
})
export class DonorService{
  private baseUrl = "http://localhost:8080/blood-bank/donor";
  queryText: string;

  constructor(private  http: HttpClient,private readonly store: Store<AppState>) {}


  getDonor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDonor(member: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, member);
  }

  updateMember(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  fetchData(): Observable<{ id: number, name: string, address: string, pn: string, bg: string }[]> {

    this.store.pipe(select('query'),select('query'))
      .subscribe(val => this.queryText = val);

    return this.http.get<{ id: number, name: string, address: string, pn: string, bg: string }[]>(`${this.baseUrl}`);
   
  }
}
