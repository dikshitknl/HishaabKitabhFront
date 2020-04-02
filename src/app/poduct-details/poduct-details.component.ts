import { Component, OnInit } from '@angular/core';
import { Column } from '../common/table/table.model';
import { ProductDetails } from './product-details.component.models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { fetchProducts, saveProducts } from './store/product.action';
import { AppState } from '../app.model';
import { Category } from '../category/category.model';
import { Brand } from '../brand/brand.component.models';
import { Vendor } from '../vendor/vendor.component.models';
import { PoductDetailsService } from './poduct-details.service';

@Component({
  selector: 'app-poduct-details',
  templateUrl: './poduct-details.component.html',
  styleUrls: ['./poduct-details.component.scss']
})
export class PoductDetailsComponent implements OnInit {

  readonly columns: Column[] = [
    { name: 'name', label: 'Product Name', type: 'STRING'},
    { name: 'brandName', label: 'Brand', type: 'STRING' },
    { name: 'vendorName', label: 'Vendor', type: 'STRING' },
    { name: 'categoryName', label: 'Category', type: 'STRING' },
    { name: 'barCode', label: 'BarCode', type: 'STRING' },
    { name: 'mfgDate', label: 'Manufactured at', type: 'DATE' },
    { name: 'expDate', label: 'Expires at', type: 'DATE' },
    { name: 'qty', label: 'Quantity', type: 'STRING' },
    { name: 'unit', label: 'Unit', type: 'STRING' },
    { name: 'costRate', label: 'Cost Price', type: 'STRING' },
    { name: 'sellRate', label: 'Selling Price', type: 'STRING' }

  ];

  productDetails: ProductDetails[] = [];
  categorys: Category[]=[];
  brands: Brand[]=[];
  vendors: Vendor[] =[];
  selectedProduct = null;
  formModalActive = false;
  addCategoryModalActive = false;
  productDetailsFormGroup: FormGroup;
  categoryFormGroup: FormGroup;

  constructor(private readonly store: Store<AppState>, private readonly fb: FormBuilder, private readonly productService: PoductDetailsService) { }

  ngOnInit(): void {
    this.prepareProductDetailsFormGroup();
    this.store.pipe(select('productDetails')).subscribe(val => this.productDetails = val);
    this.store.dispatch(fetchProducts());
    this.productService.fetchBrandData().subscribe(val => this.brands=val);
    this.productService.fetchCategoryData().subscribe(val => this.categorys=val);
    this.productService.fetchVendorData().subscribe(val => this.vendors=val);    
  }

  onAddBtnClick(): void {
    this.selectedProduct = null;
    this.formModalActive = true;

  }

  onFormSubmitBtnClick(isFormValid): void {
    if(isFormValid){
      if (this.selectedProduct == null) {
        this.store.dispatch(saveProducts({
          productDetails: {
            ...this.productDetailsFormGroup.value,
            id: null
          }
        }));
      }
      
      this.selectedProduct = null;
      this.formModalActive = false;
      this.store.dispatch
    }
  }

  onAddCategoryBtnClick(): void {
    this.addCategoryModalActive = true;
    this.formModalActive = false;

  }

  onFormCancelBtnClick(): void {
    this.selectedProduct = null;
    this.formModalActive = false;
  }

  onCategatoryAddCancelBtn(): void {
    this.addCategoryModalActive = false;
    this.formModalActive = true;

  }

  private prepareProductDetailsFormGroup(): void {
    this.productDetailsFormGroup = this.fb.group({
      name: ['', Validators.required],
      brand: this.fb.group({
        id: []
      }),
      category: this.fb.group({
        id: ['']
      }),
      vendor: this.fb.group({
        id: ['']
      }),
      barCode: ['', Validators.required],
      mfgDate: ['', Validators.required],
      expDate: ['', Validators.required],
      qty: ['', Validators.required],
      unit: ['', Validators.required],
      costRate: ['', Validators.required],
      profitMargin: [''],
      sellRate: [''],

    });

    this.categoryFormGroup = this.fb.group({
      name: new FormControl(''),
      details: new FormControl(''),
    })
  }

  deleteProduct(id: number) : void{
    this.productService.deleteProductDetails(id);
  }


}
