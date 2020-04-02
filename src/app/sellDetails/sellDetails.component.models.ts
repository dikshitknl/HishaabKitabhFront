import { ProductDetails } from '../poduct-details/product-details.component.models';
import { ProductDetailsComponentEffect } from '../poduct-details/store/product.effects';

export interface SellDetails {
    productName: string;
    brand: string;
    qty: number;
    unit: string;
    rate: number;
    total: number;
}

export interface CustomerIdState {
    custumerId: number;
}