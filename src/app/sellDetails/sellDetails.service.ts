import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { ProductDetails } from "../poduct-details/product-details.component.models";
import { SellDetails } from "./sellDetails.component.models";
import { CustomerDetails } from "../customer/customer.component.models";
import { AppState } from "../app.model";
import { Store, select } from "@ngrx/store";
import { setCustomerId } from "./store/sell.action";

@Injectable({ providedIn: "root" })
export class SellDetailsService {
  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<AppState>
  ) {}
  fetchProductData(): Observable<ProductDetails[]> {
    const url = "http://localhost:8080/product-details";
    return this.http.get<ProductDetails[]>(url);
  }

  saveCustomerData(tempForm): void {
    const tempCust = {
      name: tempForm.value.name,
      address: tempForm.value.address,
      phone: tempForm.value.phone
    };
    let tempSellList = tempForm.value["sell"];
    var tempCustId;
    const url = "http://localhost:8080/customers";
    this.http.post<CustomerDetails>(url, tempCust).subscribe(val => {
      tempCustId = val["id"];
      const urls = "http://localhost:8080/sell-details";
      for (let item of tempSellList) {
        this.http.post<{ customer:{ id:number }, product:{ id:number }, qty:number }>(urls,
          {
          customer:{
            id:tempCustId
          },
          product:{
            id:item['id']
          },
          qty:item['qty']
        }
        ).subscribe();
      }
    });
  }
}
