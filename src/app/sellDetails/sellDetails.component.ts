import { Component, OnInit } from "@angular/core";
import { Column } from "../common/table/table.model";
import { ProductDetails } from "../poduct-details/product-details.component.models";
import { SellDetails } from "./sellDetails.component.models";
import { Store, select } from "@ngrx/store";
import { AppState } from "../app.model";
import { fetchSell } from "./store/sell.action";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { SellDetailsService } from "./sellDetails.service";
import { CustomerDetails } from "../customer/customer.component.models";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sellDetails",
  templateUrl: "./sellDetails.component.html",
  styleUrls: ["./sellDetails.component.css"]
})
export class SellDetailsComponent implements OnInit {
  readonly columns: Column[] = [
    { name: "productName", label: "Product Name", type: "STRING" },
    { name: "brand", label: "Brand", type: "STRING" },
    { name: "qty", label: "Quantity", type: "STRING" },
    { name: "unit", label: "Unit", type: "STRING" },
    { name: "rate", label: "Rate", type: "STRING" },
    { name: "total", label: "Total", type: "STRING" }
  ];

  count = 0;
  products: ProductDetails[];
  sellDetails: SellDetails[] = [];
  customerDetails: CustomerDetails;
  formModalActive = false;
  sellDetailsFormGroup: FormGroup[] = [];
  customerDetailsFormGroup: FormGroup;

  constructor(
    private readonly store: Store<AppState>,
    private readonly fb: FormBuilder,
    private readonly sellService: SellDetailsService
  ) {}

  ngOnInit(): void {
    this.prepareCustomerFormGroup();
    this.sellService.fetchProductData().subscribe(val => (this.products = val));
    this.store
      .pipe(select("sellDetails"))
      .subscribe(val => (this.sellDetails = val));
    this.store.dispatch(fetchSell());
  }

  onAddBtnClick(): void {
    this.formModalActive = true;
  }

  private prepareCustomerFormGroup(): void {
    this.customerDetailsFormGroup = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      sell: this.fb.array([])
    });
  }

  get sellForms() {
    return this.customerDetailsFormGroup.get("sell") as FormArray;
  }

  addSellFormGroup(): void {
    const sellForm = this.fb.group({
      id: [],
      qty: ["", Validators.required]
    });
    this.sellForms.push(sellForm);
  }

  deleteSell(i) {
    this.sellForms.removeAt(i);
  }

  onFormSubmitBtnClick(): void {
    this.sellService.saveCustomerData(this.customerDetailsFormGroup);
    this.formModalActive = false;
  }

  onFormCancelBtnClick(): void {
    this.formModalActive = false;
  }
}
