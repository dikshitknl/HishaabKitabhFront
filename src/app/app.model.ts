import {ProductDetails} from './poduct-details/product-details.component.models';
import { SellDetails, CustomerIdState } from './sellDetails/sellDetails.component.models';

export interface Message{
   message: string;
}

export interface AppState {
   productDetails: ProductDetails[];
   sellDetails: SellDetails[];
   customerId: CustomerIdState;
}

