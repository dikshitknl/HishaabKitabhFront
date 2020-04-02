import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../category/category.model";
import { Brand } from "../brand/brand.component.models";
import { Vendor } from "../vendor/vendor.component.models";

@Injectable({ providedIn: "root" })
export class PoductDetailsService {
  constructor(private readonly http: HttpClient) {}

  fetchCategoryData(): Observable<Category[]> {
    const url = "http://localhost:8080/categorys";
    return this.http.get<Category[]>(url);
  }

  fetchBrandData(): Observable<Brand[]> {
    const url = "http://localhost:8080/brands";
    return this.http.get<Brand[]>(url);
  }

  fetchVendorData(): Observable<Vendor[]> {
    const url = "http://localhost:8080/vendors";
    return this.http.get<Vendor[]>(url);
  }

  deleteProductDetails(id:number){
    const url = "http://localhost:8080/product-details/"+id;
    // this.http.delete<{}>(url).subscribe();
  }
}
