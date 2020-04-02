import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoductDetailsComponent } from './poduct-details/poduct-details.component';
import { CategoryComponent } from './category/category.component';
import { TableComponent } from './common/table/table.component';
import { BrandComponent } from './brand/brand.component';
import {ProductDetailsComponentEffect} from './poduct-details/store/product.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellDetailsComponent } from './sellDetails/sellDetails.component';
import { SellDetailsComponentEffect } from './sellDetails/store/sell.effects';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
   declarations: [
      AppComponent,
      PoductDetailsComponent,
      CategoryComponent,
      TableComponent,
      BrandComponent,
      VendorComponent,
      DashboardComponent,
      SellDetailsComponent,
      SaleDetailsComponent,
      CustomerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      StoreModule.forRoot(appReducer),
      EffectsModule.forRoot([ProductDetailsComponentEffect,
      SellDetailsComponentEffect]),
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
