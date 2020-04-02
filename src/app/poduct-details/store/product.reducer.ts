import {createReducer, on} from '@ngrx/store';
import {ProductDetails} from '../product-details.component.models';
import {setProducts} from './product.action';

export const productDetailsComponentInitialState :ProductDetails[]=[];


export const productComponentReducer = createReducer(productDetailsComponentInitialState,
    on(setProducts, (state, action) => action.productDetails)
);
